import { Injectable, InternalServerErrorException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { InjectRepository } from '@nestjs/typeorm'
import { OAuthProvider } from '@progress/api/models'
import { User } from '@progress/orm'
import { UsersRepository } from '@repositories/UsersRepository'
import { sign } from 'jsonwebtoken'

@Injectable()
export class AuthService {
  // @Inject() private readonly usersService: UsersService
  constructor(
    @InjectRepository(User) private readonly usersRepository: UsersRepository,
    private readonly jwtService: JwtService,
  ) {}

  async login(user: any) {
    const payload = { username: user.username, sub: user.userId }
    return {
      access_token: this.jwtService.sign(payload),
    }
  }

  async validateOAuthLogin(profile: any, provider: OAuthProvider): Promise<string> {
    try {
      const { email, sub, picture, given_name, family_name } = profile._json

      let user = email
        ? await this.usersRepository.findOne({ where: { email } })
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
        image_url: user.imageUrl,
        iss: 'learn-in-public@dev',
      }

      const jwt: string = sign(payload, process.env.PROGRESS_OAUTH_JWT_SECRET!, {
        expiresIn: 3600,
      })
      return jwt
    } catch (err) {
      throw new InternalServerErrorException('validateOAuthLogin', err.message)
    }
  }

  async signPayload(payload: any) {
    return sign(payload, 'secretKey', { expiresIn: '12h' })
  }

  /**
   * Validate user in local strategy
   * @param username
   * @param password
   * @returns user by password
   */
  async validateUserByPassword(username: string, password: string): Promise<Partial<User> | null> {
    const user = await this.usersRepository.findOne({ where: { username } })
    if (user && user.password === password) {
      const { password: orgPassword, ...rest } = user
      return rest
    }
    return null
  }

  async validUserById(userId: number) {
    const user = await this.usersRepository.findOne(userId)
    if (user) {
      const { password: orgPassword, ...rest } = user
      return rest
    }
    return null
  }
}
