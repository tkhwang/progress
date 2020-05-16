import { Body, Controller, Get, Post, Req, Res, UseGuards } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { AuthGuard } from '@nestjs/passport'
import { AuthLoginDto } from '@progress/api'
import { Request, Response } from 'express'
import { LocalAuthGuard } from 'src/services/LocalAuthGuard'

@Controller('auth')
export class AuthController {
	constructor(private readonly configService: ConfigService) {}

	// @UseGuards(AuthGuard('local'))
	@UseGuards(LocalAuthGuard)
	@Post('/login')
	async login(@Body() req: AuthLoginDto) {
		return {
			username: req.username,
			password: req.password
		}
	}

	@Get('google')
	@UseGuards(AuthGuard('google'))
	googleLogin() {
		// initiates the Google OAuth2 login flow
	}

	@Get('google/callback')
	@UseGuards(AuthGuard('google'))
	googleLoginCallback(@Req() req: Request, @Res() res: Response) {
		// handles the Google OAuth2 callback
		console.log('AuthController -> googleLoginCallback -> req.user', req.user)

		const API_URL = this.configService.get<string>('PROGRESS_API_URL')
		const jwt = 'jwt' // req && req.user && req.user.jwt!
		if (jwt) res.redirect(`${API_URL}/success/${jwt}`)
		else res.redirect(`${API_URL}/fail`)
	}

	@Get('protected')
	@UseGuards(AuthGuard('jwt'))
	protectedResource() {}
}
