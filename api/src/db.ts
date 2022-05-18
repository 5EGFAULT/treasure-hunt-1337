import { PrismaClient } from "@prisma/client";

export class SingletonDB {
	private static instance: PrismaClient;
	private constructor() { }
	public static getInstance(): PrismaClient {
		if (!SingletonDB.instance) {
			//console.log("creating instance");
			//   SingletonDB.instance = new PrismaClient({ log: ["query"] });
			SingletonDB.instance = new PrismaClient();
		}
		//console.log("not creating instance");
		return SingletonDB.instance;
	}
}