import { Injectable, InternalServerErrorException } from '@nestjs/common'
import { UsersService } from 'src/users/users.service'
import { sign } from 'jsonwebtoken'
import { Provider } from '@progress/api'

@Injectable()
export class AuthService {
	constructor(private usersService: UsersService) {}

	async signPayload(payload: any) {
		return sign(payload, 'secretKey', { expiresIn: '12h' })
	}

	async validateOAuthLogin(thirdPartyId: string, provider: Provider): Promise<string> {
		try {
			// You can add some registration logic here,
			// to register the user using their thirdPartyId (in this case their googleId)
			// let user: IUser = await this.usersService.findOneByThirdPartyId(thirdPartyId, provider);

			// if (!user)
			// user = await this.usersService.registerOAuthUser(thirdPartyId, provider);

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
