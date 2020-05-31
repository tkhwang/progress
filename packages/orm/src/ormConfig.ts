import * as dotenv from 'dotenv'
import { SnakeNamingStrategy } from 'typeorm-naming-strategies'
import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions'

const snake = new SnakeNamingStrategy()
dotenv.config()

const connectionOptions: MysqlConnectionOptions = {
  logging: true,
  type: 'mysql',
  host: process.env.RDS_TKHWANG_PROGRESS_HOST,
  port: 3306,
  charset: 'utf8mb4',
  username: process.env.RDS_TKHWANG_PROGRESS_USERNAME,
  password: process.env.RDS_TKHWANG_PROGRESS_PASSWORD,
  database: process.env.RDS_TKHWANG_PROGRESS_DB,
  entities: ['./dist/entities/*.js'],
  migrations: ['./src/migrations/*.ts'],
  namingStrategy: snake,
  dateStrings: ['DATE'],
  // cli: {
  // 	migrationsDir: './src/migrations',
  // },
  synchronize: true,
}

export default connectionOptions
