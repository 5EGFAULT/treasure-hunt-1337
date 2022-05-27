import bcrypt from 'bcrypt';
import { Request, Response } from "express";
import { responses } from '../config/response';
import { generateJWT } from '../config/jwt';
import { SingletonDB } from '../db';
import { Prisma } from '@prisma/client';

export const flag = async (req: Request, res: Response) => {
	try {
		let rest = await SingletonDB.getInstance().flag.upsert({
			where: {
				name: req.body.name
			},
			update: { bounty: parseInt(req.body.bounty), name: req.body.name, max_collectors: parseInt(req.body.max_collectors), is_road: req.body.is_road, secret: req.body.secret, hint: req.body.hint, place: req.body.place },
			create: { bounty: parseInt(req.body.bounty), name: req.body.name, max_collectors: parseInt(req.body.max_collectors), is_road: req.body.is_road, secret: req.body.secret, hint: req.body.hint, place: req.body.place }
		});
		res.status(responses.ok.status).json(responses.ok);
	} catch (error) {
		console.error(error);
		res.status(responses.internal_server_error.status).json(responses.internal_server_error);
	}
}

export const team = async (req: Request, res: Response) => {
	try {
		//console.log(req.body);
		let pwd = await bcrypt.hash(req.body.password, 10);
		//let pwd = "await bcrypt.hash(req.body.password, 10)";
		let rest = await SingletonDB.getInstance().team.create({
			data: {

				name: req.body.name,
				password: pwd,
				User: {
					createMany: {
						data: (req.body.users as any[]).map(user => ({
							firstName: user.firstName,
							lastName: user.lastName,
						})),
					}
				}
			}
		});
		res.status(responses.ok.status).json(responses.ok);
	} catch (error) {
		console.error(error);
		res.status(responses.internal_server_error.status).json(responses.internal_server_error);
	}
}

export const verify = async (req: Request, res: Response) => {
	res.status(responses.ok.status).json({ ...responses.ok, data: null });
}