import 'module-alias/register'
import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm'
import connectionOptions from '@progress/orm/ormConfig'
import path from 'path'
import { MorganModule } from 'nest-morgan'
import { User } from '@progress/orm'
import { UsersRepository } from '@repositories/UsersRepository'
import { AuthController } from '@controllers/AuthController'
import { EtcController } from '@controllers/EtcController'
import { AuthService } from '@services/AuthService'
import { UsersService } from '@services/UsersService'
import { GoogleStrategy } from '@services/GoogleStrategy'
import { JwtStrategy } from '@services/JwtStrategy'
import configuration from './config/configurations'

@Module({
	imports: [TypeOrmModule.forFeature([User, UsersRepository]), ConfigModule],
	controllers: [AuthController, EtcController],
	providers: [AuthService, UsersService, GoogleStrategy, JwtStrategy],
})
export class AllModule {}

@Module({
	imports: [
		TypeOrmModule.forRoot({
			...(connectionOptions as TypeOrmModuleOptions),
			entities: [path.resolve('node_modules/@progress/orm/dist/entities/*.js')],
			subscribers: [path.resolve('node_modules/@progress/orm/dist/subscribers/*.js')],
		}),
		ConfigModule.forRoot({
			isGlobal: true,
			load: [configuration],
		}),
		MorganModule.forRoot(),
		AllModule,
	],
})
export class AppModule {}
