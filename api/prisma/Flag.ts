import { PrismaClient, Prisma } from '@prisma/client'
export const Flags = [
	{
		max_collectors: 3,
		bounty: 100,
		name: 'flag 1',
		secret: 'secret 1',
		hint: 'hint 1',
		is_expired: false,
		is_road: false,
		place: "place 1",
	}
] as Prisma.FlagCreateManyInput[]

