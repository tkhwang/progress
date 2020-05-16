import { User } from '@progress/orm'
import { EntityRepository, Repository } from 'typeorm'

@EntityRepository(User)
export class UsersRepository extends Repository<User> {}
