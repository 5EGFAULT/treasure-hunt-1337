import bcrypt from 'bcrypt';
import { Request, Response } from "express";
import { responses } from '../config/response';
import { generateJWT } from '../config/jwt';
import { SingletonDB } from '../db';

export const get = async (req: Request, res: Response) => {
	try {
		const db = SingletonDB.getInstance();
		const flags = await db.flag.findMany({
			select: {
				id: true,
				name: true,
				_count: {
					select: {
						TeamFlags: true,
					}
				}
			}
		});
		res.status(responses.ok.status).send({ ...responses.ok, data: flags });

	} catch (error) {
		console.error(error);
		res.status(responses.internal_server_error.status).json(responses.internal_server_error);
	}
}

export const submit = async (req: Request, res: Response) => {
	try {
		console.log(req.body.secret);
		console.log(res.locals.user.id);
		const db = SingletonDB.getInstance();
		const flag = await db.flag.findFirst({
			where: {
				secret: req.body.secret
			},
			include: {
				TeamFlags: true
			}
		});
		console.log(flag);
	} catch (error) {
		console.error(error);
		res.status(responses.internal_server_error.status).json(responses.internal_server_error);
	}
}
