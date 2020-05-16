import { AuthController } from '@controllers/AuthController'
import { EtcController } from '@controllers/EtcController'
import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { JwtModule } from '@nestjs/jwt'
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm'
import { User } from '@progress/orm'
import connectionOptions from '@progress/orm/ormConfig'
import { UsersRepository } from '@repositories/UsersRepository'
import { AuthService } from '@services/AuthService'
import { GoogleStrategy } from '@services/GoogleStrategy'
import { JwtStrategy } from '@services/JwtStrategy'
import { UsersService } from '@services/UsersService'

import { jwtConstants } from '@utils/AuthContstants'
import 'module-alias/register'
import { MorganModule } from 'nest-morgan'
import path from 'path'
import configuration from './config/configurations'
import { LocalStrategy } from './services/LocalStrategy'

@Module({
	imports: [
		TypeOrmModule.forFeature([User, UsersRepository]),
		ConfigModule,
		JwtModule.register({
			secret: jwtConstants.secret,
			signOptions: { expiresIn: '60s' }
		})
	],
	controllers: [AuthController, EtcController],
	providers: [AuthService, UsersService, LocalStrategy, GoogleStrategy, JwtStrategy]
})
export class AllModule {}

@Module({
	imports: [
		TypeOrmModule.forRoot({
			...(connectionOptions as TypeOrmModuleOptions),
			entities: [path.resolve('node_modules/@progress/orm/dist/entities/*.js')],
			subscribers: [path.resolve('node_modules/@progress/orm/dist/subscribers/*.js')]
		}),
		ConfigModule.forRoot({
			isGlobal: true,
			load: [configuration]
		}),
		MorganModule.forRoot(),
		AllModule
	]
})
export class AppModule {}
