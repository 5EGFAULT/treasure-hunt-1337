import { PrismaClient, Prisma } from '@prisma/client'
//import Users from './seeds/User'
import { Team, Users } from './Team'
import { Flags } from './Flag'
//import Accounts from './seeds/Account'
const prisma = new PrismaClient();


async function main() {
	console.log(`Start seeding ...`)
	const teams = await prisma.team.createMany(
		{
			data: Team,
			skipDuplicates: true
		}
	)
	console.log(`Created teams`)
	const users = await prisma.user.createMany(
		{
			data: Users,
			skipDuplicates: true,
		}
	)
	console.log(`Created users`)
	const flags = await prisma.flag.createMany(
		{
			data: Flags,
			skipDuplicates: true
		}
	)
	console.log(`Created Flags`)
	console.log(`Seeding finished.`)
}

main().catch((e) => {
	console.error(e);
	process.exit(1);
})
	.finally(async () => {
		await prisma.$disconnect()
	})
