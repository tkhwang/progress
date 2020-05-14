import { IsDefined, IsString, Matches, MaxLength, MinLength } from 'class-validator'

export enum Provider {
	GOOGLE = 'google',
}

export class AuthLoginDto {
	@IsDefined()
	@IsString()
	@MinLength(4)
	@MaxLength(20)
	username: string

	@IsDefined()
	@IsString()
	@MinLength(8)
	@MaxLength(20)
	@Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, { message: 'Password too weak.' })
	password: string
}
