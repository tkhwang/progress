import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm'
import { UsersModule } from './users/users.module'
import { EtcModule } from './etc/etc.module';
import connectionOptions from '@progress/orm/ormConfig'
import 'module-alias/register'
import path from 'path'

@Module({
	imports: [
		TypeOrmModule.forRoot({
			...(connectionOptions as TypeOrmModuleOptions),
			entities: [path.resolve('node_modules/@progress/orm/dist/entities/*.js')],
			subscribers: [path.resolve('node_modules/@progress/orm/dist/subscribers/*.js')],
		}),
		ConfigModule.forRoot({
			isGlobal: true,
		}),
		UsersModule,
		EtcModule,
	],
})
export class AppModule {}
