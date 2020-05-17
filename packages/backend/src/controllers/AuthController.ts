import { Body, Controller, Get, Post, Req, Res, UseGuards } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { AuthGuard } from '@nestjs/passport'
import { AuthLoginDto } from '@progress/api'
import { AuthService } from '@services/AuthService'
import { JwtAuthGuard } from '@services/JwtAuthGuard'
import { LocalAuthGuard } from '@services/LocalAuthGuard'
import { Request, Response } from 'express'

@Controller('auth')
export class AuthController {
	constructor(private readonly configService: ConfigService, private readonly authService: AuthService) {}

	@UseGuards(LocalAuthGuard)
	@Post('/login')
	async login(@Body() req: AuthLoginDto) {
		return {
			username: req.username,
			password: req.password
		}
	}

	@UseGuards(AuthGuard('google'))
	@Get('google')
	googleLogin() {
		// initiates the Google OAuth2 login flow
	}

	@UseGuards(AuthGuard('google'))
	@Get('google/callback')
	googleLoginCallback(@Req() req: Request, @Res() res: Response) {
		// handles the Google OAuth2 callback
		console.log('AuthController -> googleLoginCallback -> req.user', req.user)

		interface PassportUser extends Request {
			jwt: string
		}
		const { jwt } = req.user as PassportUser
		const PROGRESS_URL = this.configService.get<string>('PROGRESS_URL')

		if (req.user) res.redirect(`${PROGRESS_URL}/token?token=${jwt}`)
	}

	@UseGuards(JwtAuthGuard)
	@Get('profile')
	getProfile(@Req() req: any) {
		return req.user
	}
}
