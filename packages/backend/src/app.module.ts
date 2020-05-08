import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AuthModule } from './auth/auth.module'
import { typeormConfig } from './config/typeormConfig'
import { TasksModule } from './tasks/tasks.module'

@Module({
	imports: [
		TypeOrmModule.forRoot(typeormConfig),
		ConfigModule.forRoot({
			isGlobal: true,
		}),
		TasksModule,
		AuthModule,
	],
})
export class AppModule {}
