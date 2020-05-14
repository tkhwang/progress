import { Injectable } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { Strategy } from 'passport-google-oauth20'
import { AuthService } from '../auth.service'
import { Provider } from '@progress/api'

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
	constructor(private readonly authService: AuthService) {
		super({
			clientID: process.env.PROGRESS_OAUTH_GOOGLE_CLIENT_ID,
			clientSecret: process.env.PROGRESS_OAUTH_GOOGLE_CLIENT_SECRET,
			callbackURL: process.env.PROGRESS_OAUTH_GOOGLE_CALLBACK_URL,
			passReqToCallback: true,
			scope: ['profile'],
		})
	}

	async validate(request: any, accessToken: string, refreshToken: string, profile: any, done: Function) {
		try {
			console.log(profile)

			const jwt: string = await this.authService.validateOAuthLogin(profile.id, Provider.GOOGLE)
			const user = { jwt }
			done(null, user)
		} catch (err) {
			// console.log(err)
			done(err, false)
		}
	}
}
