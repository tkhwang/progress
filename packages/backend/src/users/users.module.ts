import { Module } from '@nestjs/common'
import { UsersService } from './users.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { User } from '@progress/orm'
import { UsersRepository } from './users.repository'

@Module({
	imports: [TypeOrmModule.forFeature([User, UsersRepository])],
	providers: [UsersService],
	exports: [UsersService],
})
export class UsersModule {}
