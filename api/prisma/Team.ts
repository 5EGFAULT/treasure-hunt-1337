import { PrismaClient, Prisma } from '@prisma/client'
export const Team = [
	{
		id: 2,
		name: 'team 1',
		picture: 'fileimg',
		password: '123456',
	}
] as Prisma.TeamCreateManyInput[]

export const Users = [
	{
		id: 1,
		firstName: 'firstName 1',
		lastName: 'lastName 1',
		username: 'username 1',
		teamId: 1,
	},
	{
		id: 2,
		firstName: 'firstName 2',
		lastName: 'lastName 2',
		username: 'username 2',
		teamId: 1,
	},
	{
		id: 3,
		firstName: 'firstName 3',
		lastName: 'lastName 3',
		username: 'username 3',
		teamId: 1,
	},
	{
		id: 4,
		firstName: 'firstName 4',
		lastName: 'lastName 4',
		username: 'username 4',
		teamId: 1,
	}

] as Prisma.UserCreateManyInput[]