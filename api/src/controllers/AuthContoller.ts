import bcrypt from 'bcrypt';
import { Request, Response } from "express";
import { responses } from '../config/response';
import { generateJWT } from '../config/jwt';
import { SingletonDB } from '../db';

export const login = async (req: Request, res: Response) => {
	//const db = SingletonDB.getInstance();
	const { username, password } = req.body;
	if (!username || !password) {
		res.status(responses.bad_request.status).json(responses.bad_request);
		return;
	}
	try {
		const user = await SingletonDB.getInstance().user.findFirst({ where: { username } });
		if (!user) {
			res.status(responses.unauthorized.status).send(responses.unauthorized);
			return;
		}
		const isPasswordValid = await bcrypt.compare(password, user.password);
		if (!isPasswordValid) {
			res.status(responses.unauthorized.status).send(responses.unauthorized);
			return;
		}
		const token = await generateJWT(user, res);
		res.status(responses.ok.status).send({ ...responses.ok, data: { ...user, password: "" } });
	} catch (error) {
		console.error(error);
		res.status(responses.internal_server_error.status).json(responses.internal_server_error);
	}
}

export const register = async (req: Request, res: Response) => {
	const db = SingletonDB.getInstance();
	const { email, password, username } = req.body;
	if (!email || !password || !username) {
		res.status(responses.bad_request.status).json(responses.bad_request);
	}
	const user = await db.user.findFirst(
		{
			where: {
				OR: [
					{
						email: email
					},
					{
						username: username
					}]
			}
		}
	);
	if (user) {
		res.status(responses.bad_request.status).json({ ...responses.bad_request, message: 'User already exists' });
		return;
	}
	const hashedPassword = await bcrypt.hash(password, 10);
	const newUser = await db.user.create({
		data: {
			email: email,
			password: hashedPassword,
			username: username,
		}
	});
	const token = await generateJWT(newUser, res);
	res.status(responses.ok.status).json({ ...responses.ok, data: newUser });
}

export const logout = async (req: Request, res: Response) => {
	res.clearCookie('JWT_TOKEN');
	res.status(responses.ok.status).json(responses.ok);
}

export const verify = async (req: Request, res: Response) => {
	res.status(responses.ok.status).json({ ...responses.ok, data: { ...res.locals.user, password: "" } });
}