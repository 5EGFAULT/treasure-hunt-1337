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

export const logout = async (req: Request, res: Response) => {
	res.clearCookie('JWT_TOKEN');
	res.status(responses.ok.status).json(responses.ok);
}

export const verify = async (req: Request, res: Response) => {
	res.status(responses.ok.status).json({ ...responses.ok, data: { ...res.locals.user, password: "" } });
}