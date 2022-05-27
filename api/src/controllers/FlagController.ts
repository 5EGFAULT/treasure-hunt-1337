import bcrypt from 'bcrypt';
import { Request, Response } from "express";
import { responses } from '../config/response';
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
		const db = SingletonDB.getInstance();
		const flag = await db.flag.findFirst({
			where: {
				secret: req.body.secret
			},
			include: {
				TeamFlags: true
			}
		});
		if (flag) {
			const teamf = await db.teamFlags.findFirst({
				where: {
					teamId: res.locals.user.id,
					flagId: flag.id
				},
			});
			if (!teamf) {
				let collected = flag.TeamFlags.length;
				let value = 0;
				if (collected > 2)
					value = flag.bounty * 0.1;
				else if (collected == 2)
					value = flag.bounty * 0.3;
				else if (collected == 1)
					value = flag.bounty * 0.6;
				else if (collected == 0)
					value = flag.bounty;
				let result = await db.teamFlags.create({
					data: {
						teamId: res.locals.user.id,
						flagId: flag.id,
						
					}
				});
			}
			res.status(responses.ok.status).send({ ...responses.ok, data: { hint: flag.hint } });
		} else {
			res.status(responses.not_found.status).json(responses.not_found);
		}

	} catch (error) {
		console.error(error);
		res.status(responses.internal_server_error.status).json(responses.internal_server_error);
	}
}
