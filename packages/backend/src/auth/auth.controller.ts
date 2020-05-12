import { Controller, Request, Post, UseGuards, Body } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { AuthLoginDto } from '@progress/api'

@Controller('auth')
export class AuthController {
	// @UseGuards(AuthGuard('local'))
	@Post('/login')
	async login(@Body() req: AuthLoginDto) {
		return {
			username: req.username,
			password: req.password,
		}
	}
}
