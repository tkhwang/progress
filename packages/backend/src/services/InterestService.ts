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
