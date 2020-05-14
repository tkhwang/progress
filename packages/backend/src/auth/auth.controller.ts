import { Controller, Post, UseGuards, Body, Get, Req, Res } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { AuthLoginDto } from '@progress/api'
import { LocalAuthGuard } from './local-auth.guard'
import { Request, Response } from 'express'

@Controller('auth')
export class AuthController {
	// @UseGuards(AuthGuard('local'))
	@UseGuards(LocalAuthGuard)
	@Post('/login')
	async login(@Body() req: AuthLoginDto) {
		return {
			username: req.username,
			password: req.password,
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

		const jwt = 'jwt' // req && req.user && req.user.jwt
		if (jwt) res.redirect('http://localhost:80/login/succes/' + jwt)
		else res.redirect('http://localhost:80/login/failure')
	}

	@Get('protected')
	@UseGuards(AuthGuard('jwt'))
	protectedResource() {}
}
