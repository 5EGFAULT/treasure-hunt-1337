import bcrypt from 'bcrypt';
import { Request, Response } from "express";
import { responses } from '../config/response';
import { generateJWT } from '../config/jwt';
import { SingletonDB } from '../db';

export const get = async (req: Request, res: Response) => {
	try {

	} catch (error) {
		console.error(error);
		res.status(responses.internal_server_error.status).json(responses.internal_server_error);
	}
}

export const leaderboard = async (req: Request, res: Response) => {
	try {

	} catch (error) {
		console.error(error);
		res.status(responses.internal_server_error.status).json(responses.internal_server_error);
	}
}
