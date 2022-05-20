/**
 * Model User
 * 
 */
export type User = {
	id: number
	firstName: string
	lastName: string
	username: string
	email: string
	teamId: number
}

/**
 * Model Team
 * 
 */
export type Team = {
	id: number
	name: string
	password: string
	picture: string | null
}

/**
 * Model Flag
 * 
 */
export type Flag = {
	id: number
	name: string
	placeholder: string | null
	hint: string
	secret: string
	bounty: number
	bounty_reduction_percent: number
	has_bounty: boolean
	max_collectors: number
	picture: string
}

/**
 * Model TeamFlags
 * 
 */
export type TeamFlags = {
	id: number
	teamId: number
	flagId: number
	collectedAt: Date
}