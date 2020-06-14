import { Resource } from '@progress/orm'
import { EntityRepository, Repository } from 'typeorm'

@EntityRepository(Resource)
export class ResourceRepository extends Repository<Resource> {
  async findByUserAndInterest(userId: number, interestId: number) {
    return this.createQueryBuilder('r')
      .where(`created_user_id = :userId`, { userId })
      .andWhere(`interest_id = :interestId`, { interestId })
      .getMany()
  }
}
