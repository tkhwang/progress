import { Injectable } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { jwtConstants } from '@utils/AuthContstants'
import { ExtractJwt, Strategy } from 'passport-jwt'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
	constructor() {
		super({
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			ignoreExpiration: false,
			secretOrKey: jwtConstants.secret
		})
	}

	async validate(payload: any) {
		return { userId: payload.sub, username: payload.username }
	}
}

/*
import { Injectable, UnauthorizedException } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { ExtractJwt, Strategy } from 'passport-jwt'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
	constructor() {
		super({
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			secretOrKey: process.env.PROGRESS_OAUTH_JWT_SECRET
		})
	}

	async validate(payload: any, done: Function) {
		try {
			// You could add a function to the authService to verify the claims of the token:
			// i.e. does the user still have the roles that are claimed by the token
			// const validClaims = await this.authService.verifyTokenClaims(payload);

			// if (!validClaims)
			//    return done(new UnauthorizedException('invalid token claims'), false);

			done(null, payload)
		} catch (err) {
			throw new UnauthorizedException('unauthorized', err.message)
		}
	}
}
*/
