import { TypeOrmModuleOptions } from '@nestjs/typeorm'
import * as dotenv from 'dotenv'
dotenv.config()

export const typeormConfig: TypeOrmModuleOptions = {
	type: 'mysql',
	host: process.env.RDS_TKHWANG_PROGRESS_HOST,
	port: 3306,
	username: process.env.RDS_TKHWANG_PROGRESS_USERNAME,
	password: process.env.RDS_TKHWANG_PROGRESS_PASSWORD,
	database: process.env.RDS_TKHWANG_PROGRESS_DB,
	entities: [__dirname + '/../**/*.entity.{js,ts}'],
	synchronize: true
}
