import { Module } from '@nestjs/common'
import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'
import { UsersModule } from 'src/users/users.module'
import { PassportModule } from '@nestjs/passport'
import { GoogleStrategy } from './strategies/google.strategy'
import { JwtStrategy } from './strategies/jwt.strategy'
import { ConfigModule } from '@nestjs/config'
import { UsersRepository } from 'src/users/users.repository'
import { TypeOrmModule } from '@nestjs/typeorm'
import { User } from '@progress/orm'
import { UsersService } from 'src/users/users.service'

@Module({
	controllers: [AuthController],
	imports: [UsersModule, PassportModule, ConfigModule],
	providers: [AuthService, GoogleStrategy, JwtStrategy],
})
export class AuthModule {}
