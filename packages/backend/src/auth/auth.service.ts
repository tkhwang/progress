import { Injectable, InternalServerErrorException, Inject } from '@nestjs/common'
import { UsersService } from 'src/users/users.service'
import { sign } from 'jsonwebtoken'
import { Provider } from '@progress/api'
import { InjectRepository } from '@nestjs/typeorm'
import { User } from '@progress/orm'
import { UsersRepository } from 'src/users/users.repository'

@Injectable()
export class AuthService {
	// constructor(private usersService: UsersService) {}

	// constructor(@InjectRepository(User) private readonly usersRepository: UsersRepository) {}
	@Inject() private readonly usersService: UsersService

	async signPayload(payload: any) {
		return sign(payload, 'secretKey', { expiresIn: '12h' })
	}

	async validateOAuthLogin(profile: any, provider: Provider): Promise<string> {
		try {
			// You can add some registration logic here,
			// to register the user using their thirdPartyId (in this case their googleId)
			// let user: IUser = await this.usersService.findOneByThirdPartyId(thirdPartyId, provider)
			const exUser = await this.usersService.findOneByEmail(profile.email)
			console.log('AuthService -> //constructor -> exUser', exUser)

			// if (!user) user = await this.usersService.registerOAuthUser(thirdPartyId, provider)

			const thirdPartyId = profile.id

			const payload = {
				thirdPartyId,
				provider,
			}

			const jwt: string = sign(payload, process.env.PROGRESS_OAUTH_JWT_SECRET!, { expiresIn: 3600 })
			return jwt
		} catch (err) {
			throw new InternalServerErrorException('validateOAuthLogin', err.message)
		}
	}
}
