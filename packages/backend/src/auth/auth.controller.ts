import { Body, Controller, Post, ValidationPipe } from '@nestjs/common'
import { AuthCredentialsDto } from '@progress/api'
import { AuthService } from './auth.service'

@Controller('auth')
export class AuthController {
	constructor(private readonly authService: AuthService) {}

	@Post('/signup')
	signUp(
		@Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto
	): Promise<void> {
		console.log(
			'AuthController -> signUp -> authCredentialsDto',
			authCredentialsDto
		)
		return this.authService.signUp(authCredentialsDto)
	}
}
