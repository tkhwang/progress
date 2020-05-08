import {
	ConflictException,
	InternalServerErrorException
} from '@nestjs/common'
import { AuthCredentialsDto } from '@progress/api'
import { User } from 'src/orm/user.entity'
import { EntityRepository, Repository } from 'typeorm'

@EntityRepository(User)
export class UserRepository extends Repository<User> {
	async signUp(authCredentialsDto: AuthCredentialsDto) {
		const { username, password } = authCredentialsDto

		const user = new User()
		user.username = username
		user.password = password

		try {
			await user.save()
		} catch (error) {
			console.log(error.code, error)
			if (error.code === 'ER_DUP_ENTRY') {
				throw new ConflictException('Username already exists')
			} else {
				throw new InternalServerErrorException()
			}
		}
	}
}
