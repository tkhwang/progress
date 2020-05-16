import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm'
import connectionOptions from '@progress/orm/ormConfig'
import 'module-alias/register'
import path from 'path'
import { MorganModule } from 'nest-morgan'
import configuration from './config/configurations'
import { User } from '../../orm/src/entities/User'
import { UsersRepository } from './repositories/UsersRepository'
import { GoogleStrategy } from './services/GoogleStrategy'
import { JwtStrategy } from './services/JwtStrategy'
import { AuthController } from './controllers/AuthController'
import { EtcController } from './controllers/EtcController'
import { AuthService } from './services/AuthService'
import { UsersService } from './services/UsersService'

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
