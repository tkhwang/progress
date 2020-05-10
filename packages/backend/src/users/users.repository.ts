import { Repository, EntityRepository } from 'typeorm'
import { User } from '@progress/orm'

@EntityRepository(User)
export class UsersRepository extends Repository<User> {}
