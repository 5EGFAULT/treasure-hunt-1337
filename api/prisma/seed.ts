import { PrismaClient, Prisma } from '@prisma/client'
//import Users from './seeds/User'
//import Teams from './seeds/Team'
//import Accounts from './seeds/Account'
const prisma = new PrismaClient();


async function main() {
	console.log(`Start seeding ...`)
	//const users = await prisma.user.createMany(
	//	{
	//		data: Users,
	//		skipDuplicates: true,
	//	}
	//)
	//console.log(`Created users`)
	//const teams = await prisma.team.createMany(
	//	{
	//		data: Teams,
	//		skipDuplicates: true
	//	}
	//)
	//console.log(`Created teams`)
	//const accounts = await prisma.account.createMany(
	//	{
	//		data: Accounts,
	//		skipDuplicates: true
	//	}
	//)
	//console.log(`Created accounts`)
	console.log(`Seeding finished.`)
}

main().catch((e) => {
	console.error(e);
	process.exit(1);
})
	.finally(async () => {
		await prisma.$disconnect()
	})
