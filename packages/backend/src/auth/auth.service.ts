import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { AuthCredentialsDto } from '@progress/api'
import { UserRepository } from './user.repository'

@Injectable()
export class AuthService {
	constructor(
		@InjectRepository(UserRepository)
		private readonly userRepository: UserRepository
	) {}

	signUp(authCredentialsDto: AuthCredentialsDto): Promise<void> {
		return this.userRepository.signUp(authCredentialsDto)
	}
}
