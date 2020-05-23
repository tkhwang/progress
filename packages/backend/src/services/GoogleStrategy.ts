import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { OAuthProvider } from '@progress/api/models';
import { Strategy } from 'passport-google-oauth20';
import { AuthService } from './AuthService';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(private readonly authService: AuthService) {
    super({
      clientID: process.env.PROGRESS_OAUTH_GOOGLE_CLIENT_ID,
      clientSecret: process.env.PROGRESS_OAUTH_GOOGLE_CLIENT_SECRET,
      callbackURL:
        process.env.NODE_ENV === 'local'
          ? process.env.PROGRESS_OAUTH_GOOGLE_CALLBACK_URL_LOCAL
          : process.env.PROGRESS_OAUTH_GOOGLE_CALLBACK_URL_DEV,
      passReqToCallback: true,
      scope: [
        'profile',
        'email',
        'https://www.googleapis.com/auth/userinfo.profile',
        'https://www.googleapis.com/auth/userinfo.email',
      ],
    });
  }

  async validate(
    request: any,
    accessToken: string,
    refreshToken: string,
    profile: any,
    done: Function,
  ) {
    try {
      console.log(profile);

      const jwt: string = await this.authService.validateOAuthLogin(profile, OAuthProvider.GOOGLE);
      const user = { jwt };
      done(null, user);
    } catch (err) {
      // console.log(err)
      done(err, false);
    }
  }
}
