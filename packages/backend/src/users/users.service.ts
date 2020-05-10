import { Injectable } from '@nestjs/common'
import { User } from '@progress/orm'
import { InjectRepository } from '@nestjs/typeorm'
import { UsersRepository } from './users.repository'

@Injectable()
export class UsersService {
	private readonly users: User[]

	// TODO:
	// @InjectRepository(User) private readonly usersRepository: UsersRepository

	async findOne(username: string): Promise<User | undefined> {
		// return await this.usersRepository.findOne({ where: { username: username } })
		return undefined
	}
}
