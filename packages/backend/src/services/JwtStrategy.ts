import { Injectable, UnauthorizedException } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { jwtConstants } from '@utils/AuthConstants'
import { ExtractJwt, Strategy } from 'passport-jwt'
import { AuthService } from './AuthService'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    })
  }

  async validate(payload: any) {
    if (!(payload && payload.id)) throw new UnauthorizedException()

    const user = await this.authService.validUserById(payload.id)
    return user
  }
}
