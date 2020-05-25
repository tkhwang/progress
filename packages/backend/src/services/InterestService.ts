import { Injectable, BadRequestException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { InterestRepository } from '@repositories/InterestRepository'
import { Interest, User } from '@progress/orm'
import { InterestPostInterestErrors } from '@progress/api'
import { UsersRepository } from '@repositories/UsersRepository'

@Injectable()
export class InterestService {
  @InjectRepository(Interest) private readonly interestRepository: InterestRepository
  @InjectRepository(User) private readonly usersRepository: UsersRepository

  /**
   * Get interests of user
   * @param user : number
   * @returns  interests
   */
  async getInterests(user: number) {
    const interests = await this.interestRepository.findInterestsByUser(user)
    return interests.map((interest: any) => interest.interest)
  }

  /**
   * Add new interest of user
   * @param interest : string
   * @param user : number
   * @returns
   */
  async postInterest(interest: string, user: number) {
    const foundInterest = await this.interestRepository.findInterestByUser(interest, user)
    if (foundInterest)
      throw new BadRequestException(
        InterestPostInterestErrors.DUPLICATE_INTEREST_REGISTRATION_NOT_ALLOWED,
      )

    const foundUser = await this.usersRepository.findOne({ where: { id: user } })
    if (!foundUser) throw new BadRequestException(InterestPostInterestErrors.NO_USER_FOUND)

    const newInterest = this.interestRepository.create()
    newInterest.interest = interest
    newInterest.createdUser = foundUser
    await this.interestRepository.save(newInterest)

    return { interestId: newInterest.id }
  }
}
