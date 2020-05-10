import { Injectable } from '@nestjs/common'
import { User } from '@progress/orm'

@Injectable()
export class UsersService {
	private readonly users: User[]

	constructor() {}

	async findOne(username: string): Promise<User | undefined> {
		return
	}
}
