import { Team } from "@prisma/client";
import { NextFunction, Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import { responses } from "./response";
import * as dotenv from "dotenv";

dotenv.config();
const SECRET_JWT_KEY: string = (process.env.SECRET_JWT_KEY as string);

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {

	let data;
	let token = req.cookies['JWT_TOKEN'];
	if (token) {
		try {
			data = <any>jwt.verify(token, SECRET_JWT_KEY);
			res.locals.user = data.user;
			next();
		} catch (error: any) {
			res.clearCookie("JWT_TOKEN");
			res.status(responses.unauthorized.status).send(responses.unauthorized);
			return;
		}

	} else {
		res.status(responses.unauthorized.status).send(responses.unauthorized);
		return;
	}
}


export const generateJWT = (user: Team, res: Response): Promise<string> => {

	return new Promise<string>((resolve, reject) => {
		jwt.sign({ user: user }, SECRET_JWT_KEY, { expiresIn: '5h' }, (error: any, token: string) => {
			if (error || !token) {
				return reject(error);
			};
			res.locals.user = user;
			res.cookie('JWT_TOKEN', token, { httpOnly: true, path: '/' });
			resolve(token);
		});
	});
}

export const verifyTokenAdmin = (req: Request, res: Response, next: NextFunction) => {
	const ADMIN_TOKEN: string = (process.env.ADMIN_TOKEN as string);
	let token = req.cookies['JWT_ADMIN_TOKEN'];
	if (token && token === ADMIN_TOKEN) {
		next();
	} else {
		res.status(responses.unauthorized.status).send(responses.unauthorized);
		return;
	}
}