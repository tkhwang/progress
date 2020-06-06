import { ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { AuthGuard } from '@nestjs/passport'

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  constructor(private readonly reflector: Reflector) {
    super()
  }
  canActivate(context: ExecutionContext) {
    return super.canActivate(context)
  }

  handleRequest(err: any, user: any, info: any) {
    console.log('JwtAuthGuard -> handleRequest -> info', info)
    console.log('JwtAuthGuard -> handleRequest -> user', user)

    if (!user) throw new UnauthorizedException()

    return user
  }
}
