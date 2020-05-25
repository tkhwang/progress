import { EntityRepository, Interest } from '@progress/orm'
import { Repository, getConnection } from 'typeorm'

@EntityRepository(Interest)
export class InterestRepository extends Repository<Interest> {
  async findInterestByUser(interest: string, user: number) {
    // return this.find({ select: ['interest'], where: { createdUser: user } })
    return this.findOne({ where: { interest, createdUser: user } })
  }

  async findInterestsByUser(user: number) {
    return this.find({ select: ['interest', 'createdAt'], where: { createdUser: user } })
  }

  async insertInterest(interest: string, user: number) {
    return getConnection()
      .createQueryBuilder()
      .insert()
      .into(Interest)
      .values([{ interest }])
      .execute()
  }
}
