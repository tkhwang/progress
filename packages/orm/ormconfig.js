const { SnakeNamingStrategy } = require('typeorm-naming-strategies');
const snake = new SnakeNamingStrategy();
module.exports = {
  logging: true,
  type: 'mysql',
  host: process.env.RDS_TKHWANG_PROGRESS_HOST,
  port: 3306,
  charset: 'UTF8MB4_UNICODE_CI',
  username: process.env.RDS_TKHWANG_PROGRESS_USERNAME,
  password: process.env.RDS_TKHWANG_PROGRESS_PASSWORD,
  database: process.env.RDS_TKHWANG_PROGRESS_DB,
  entities: ['./dist/entities/*.js'],
  migrations: ['./src/migrations/*.ts'],
  namingStrategy: snake,
  dateStrings: ['DATE'],
  cli: {
    migrationsDir: './src/migrations',
  },
  synchronize: true,
};
