import bcrypt from 'bcrypt';
import { Request, Response } from "express";
import { responses } from '../config/response';
import { generateJWT } from '../config/jwt';
import { SingletonDB } from '../db';

export const get = async (req: Request, res: Response) => {
	try {
		const db = SingletonDB.getInstance();
		const teams = await db.team.findMany({
			select: {
				id: true,
				name: true,
				TeamFlags: true,
				picture: true,
			}
		});
		res.status(responses.ok.status).send({ ...responses.ok, data: teams });
	} catch (error) {
		console.error(error);
		res.status(responses.internal_server_error.status).json(responses.internal_server_error);
	}
}

export const pic = async (req: Request, res: Response) => {
	try {
		let rest = await SingletonDB.getInstance().team.update({
			where: {
				id: res.locals.user.id
			},
			data: {

				picture: req.file.filename,
			}
		});
		res.status(responses.ok.status).send({ ...responses.ok, data: null });
	} catch (error) {
		console.error(error);
		res.status(responses.internal_server_error.status).json(responses.internal_server_error);
	}
}

export const us = async (req: Request, res: Response) => {
	try {
		let rest = await SingletonDB.getInstance().team.findFirst({
			where: {
				id: res.locals.user.id
			},
			select: {
				id: true,
				name: true,
				picture: true,
				User: true,
				TeamFlags: true
			}
		});
		res.status(responses.ok.status).send({ ...responses.ok, data: rest });
	} catch (error) {
		console.error(error);
		res.status(responses.internal_server_error.status).json(responses.internal_server_error);
	}
}
