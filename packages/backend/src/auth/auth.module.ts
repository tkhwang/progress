import { Module } from '@nestjs/common'
import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'
import { UsersModule } from 'src/users/users.module'
import { PassportModule } from '@nestjs/passport'
import { GoogleStrategy } from './strategies/google.strategy'
import { JwtStrategy } from './strategies/jwt.strategy'
import { ConfigModule } from '@nestjs/config'

@Module({
	controllers: [AuthController],
	imports: [UsersModule, PassportModule, ConfigModule],
	providers: [AuthService, GoogleStrategy, JwtStrategy],
})
export class AuthModule {}
