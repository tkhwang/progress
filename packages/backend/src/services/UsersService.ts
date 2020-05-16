import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { User } from '@progress/orm'
import { UsersRepository } from 'src/repositories/UsersRepository'

@Injectable()
export class UsersService {
	constructor(@InjectRepository(User) private readonly usersRepository: UsersRepository) {}

	/**
	 * Find user by email
	 *
	 * @param {string} email
	 * @returns {(Promise<User | undefined>)}
	 * @memberof UsersService
	 */
	async findOneByEmail(email: string): Promise<User | undefined> {
		return this.usersRepository.findOne({ where: { email: email } })
	}

	async findOne(username: string): Promise<User | undefined> {
		return await this.usersRepository.findOne({ where: { username: username } })
		// return undefined
	}
}
