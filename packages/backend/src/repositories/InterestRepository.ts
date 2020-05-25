import { EntityRepository, Interest } from '@progress/orm'
import { Repository, getConnection } from 'typeorm'

@EntityRepository(Interest)
export class InterestRepository extends Repository<Interest> {
  async findInterestByUser(interest: string, user: number) {
    // return this.find({ select: ['interest'], where: { createdUser: user } })
    return this.findOne({ where: { interest, createdUser: user } })

    // return this.createQueryBuilder()
    //   .select('interest')
    //   .where(`created_user_id = :user`, { user })
    //   .getRawOne()
  }

  async findInterestsByUser(user: number) {
    return this.find({ where: { createdUser: user } })
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
