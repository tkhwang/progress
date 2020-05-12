import { Module } from '@nestjs/common'
import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'
import { UsersModule } from 'src/users/users.module'
import { LocalStrategy } from './local.strategy'
import { PassportModule } from '@nestjs/passport'
import { MorganModule, MorganInterceptor } from 'nest-morgan'

@Module({
	controllers: [AuthController],
	imports: [UsersModule, PassportModule],
	providers: [AuthService, LocalStrategy],
})
export class AuthModule {}
