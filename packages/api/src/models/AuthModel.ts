import { IsDefined, IsString, Matches, MaxLength, MinLength } from 'class-validator'

export enum OAuthProvider {
  GOOGLE = 'google',
}

export class UserJwtModel {
  public id: number
  public name?: string
  public email?: string
  public imag_url?: string
  public provider: string
  public providerId?: string
  public iss: string
}

// export type PassportUserExt =

export class AuthLoginDto {
  @IsDefined()
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  public username: string

  @IsDefined()
  @IsString()
  @MinLength(8)
  @MaxLength(20)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'Password too weak.',
  })
  public password: string
}

export enum AUTH_KEY {
  TOKEN = 'AUTH_TOKEN',
  USER = 'AUTH_USER',
}
