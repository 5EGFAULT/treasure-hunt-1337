import bcrypt from 'bcrypt';
import { Request, Response } from "express";
import { responses } from '../config/response';
import { generateJWT } from '../config/jwt';
import { SingletonDB } from '../db';

export const login = async (req: Request, res: Response) => {
	const { name, password } = req.body;
	if (!name || !password) {
		res.status(responses.bad_request.status).json(responses.bad_request);
		return;
	}
	try {
		const team = await SingletonDB.getInstance().team.findFirst({ where: { name } });
		if (!team) {
			res.status(responses.unauthorized.status).send(responses.unauthorized);
			return;
		}
		const isPasswordValid = await bcrypt.compare(password, team.password);
		if (!isPasswordValid) {
			res.status(responses.unauthorized.status).send(responses.unauthorized);
			return;
		}
		const token = await generateJWT(team, res);
		res.status(responses.ok.status).send({ ...responses.ok, data: { ...team, password: "" } });
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