import { Inject, Injectable, InternalServerErrorException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { OAuthProvider } from '@progress/api'
import { User } from '@progress/orm'
import { UsersRepository } from '@repositories/UsersRepository'
import { sign } from 'jsonwebtoken'
import { UsersService } from './UsersService'

@Injectable()
export class AuthService {
	@Inject() private readonly usersService: UsersService
	constructor(@InjectRepository(User) private readonly usersRepository: UsersRepository) {}

	async signPayload(payload: any) {
		return sign(payload, 'secretKey', { expiresIn: '12h' })
	}

	async validateOAuthLogin(profile: any, provider: OAuthProvider): Promise<string> {
		try {
			// You can add some registration logic here,
			// to register the user using their thirdPartyId (in this case their googleId)
			// let user: IUser = await this.usersService.findOneByThirdPartyId(thirdPartyId, provider)
			let user = await this.usersService.findOneByEmail(profile.email)

			const { email, sub, picture, given_name, family_name } = profile._json
			if (user) {
				const newName = `${family_name} ${given_name}`
				if (newName !== user.username) user.username = newName
				if (email !== user.email) user.email = email
				if (sub !== user.providerId) user.providerId = sub
				if (picture !== user.imageUrl) user.imageUrl = picture

				await this.usersRepository.save(user)
			} else {
				user = new User()
				user.provider = OAuthProvider.GOOGLE
				if (given_name || family_name) user.username = `${family_name} ${given_name}`
				if (email) user.email = email
				if (sub) user.providerId = sub
				if (picture) user.imageUrl = picture

				await this.usersRepository.save(user)
			}

			// if (!user) user = await this.usersService.registerOAuthUser(thirdPartyId, provider)

			const payload = {
				id: user.id,
				provider: user.provider,
			}

			const jwt: string = sign(payload, process.env.PROGRESS_OAUTH_JWT_SECRET!, { expiresIn: 3600 })
			return jwt
		} catch (err) {
			throw new InternalServerErrorException('validateOAuthLogin', err.message)
		}
	}
}
