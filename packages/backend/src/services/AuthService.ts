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
			const { email, sub, picture, given_name, family_name } = profile._json

			let user = email
				? await this.usersRepository.findOne({ where: { email: email } })
				: await this.usersRepository.findOneBySocial(OAuthProvider.GOOGLE, sub)

			if (user) {
				const newName = `${family_name} ${given_name}`
				if (newName !== user.username) user.username = newName
				if (email !== user.email) user.email = email
				if (sub !== user.providerId) user.providerId = sub
				if (picture !== user.imageUrl) user.imageUrl = picture
			} else {
				user = new User()
				user.provider = OAuthProvider.GOOGLE
				if (given_name || family_name) user.username = `${family_name} ${given_name}`
				if (email) user.email = email
				if (sub) user.providerId = sub
				if (picture) user.imageUrl = picture
			}
			await this.usersRepository.save(user)

			// if (!user) user = await this.usersService.registerOAuthUser(thirdPartyId, provider)

			const payload = {
				id: user.id,
				provider: user.provider,
				name: user.username,
				email: user.email,
				iss: 'learn-in-public@dev'
			}

			const jwt: string = sign(payload, process.env.PROGRESS_OAUTH_JWT_SECRET!, { expiresIn: 3600 })
			return jwt
		} catch (err) {
			throw new InternalServerErrorException('validateOAuthLogin', err.message)
		}
	}
}
