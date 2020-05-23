import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { User } from '@progress/orm'
import { UsersRepository } from '@repositories/UsersRepository'

@Injectable()
export class UsersService {
	constructor(@InjectRepository(User) private readonly usersRepository: UsersRepository) {}

	async findOne(username: string): Promise<User | undefined> {
		return await this.usersRepository.findOne({ where: { username: username } })
		// return undefined
	}
}
