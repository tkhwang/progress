import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { typeormConfig } from './config/typeormConfig'
import { TasksModule } from './tasks/tasks.module'

@Module({
	imports: [
		TypeOrmModule.forRoot(typeormConfig),
		ConfigModule.forRoot({
			isGlobal: true,
		}),
		TasksModule,
	],
})
export class AppModule {}
