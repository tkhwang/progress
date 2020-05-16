import { Injectable } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { Strategy } from 'passport-google-oauth20'
import { AuthService } from '../auth.service'
import { Provider } from '@progress/api'
import { ConfigService } from '@nestjs/config'

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
	constructor(private configService: ConfigService, private readonly authService: AuthService) {
		super({
			clientID: process.env.PROGRESS_OAUTH_GOOGLE_CLIENT_ID,
			clientSecret: process.env.PROGRESS_OAUTH_GOOGLE_CLIENT_SECRET,
			callbackURL:
				process.env.NODE_ENV === 'local'
					? process.env.PROGRESS_OAUTH_GOOGLE_CALLBACK_URL_LOCAL
					: process.env.PROGRESS_OAUTH_GOOGLE_CALLBACK_URL_DEV,
			passReqToCallback: true,
			scope: ['profile'],
		})
	}

	async validate(request: any, accessToken: string, refreshToken: string, profile: any, done: Function) {
		try {
			console.log(profile)

			const jwt: string = await this.authService.validateOAuthLogin(profile, Provider.GOOGLE)
			const user = { jwt }
			done(null, user)
		} catch (err) {
			// console.log(err)
			done(err, false)
		}
	}
}
