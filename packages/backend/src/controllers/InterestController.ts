import { Body, Controller, Get, Post, Query } from '@nestjs/common'
import {
  InterestGetInterestsRequest,
  InterestGetInterestsResponse,
  InterestPostInterestRequest,
} from '@progress/api'
import { InterestService } from '@services/InterestService'

@Controller('interest')
export class InterestController {
  constructor(private readonly interestService: InterestService) {}

  @Get('/')
  async getInterests(
    @Query() params: InterestGetInterestsRequest,
  ): Promise<InterestGetInterestsResponse> {
    return this.interestService.getInterests(params.user)
  }

  @Post('/')
  async postInterest(@Body() params: InterestPostInterestRequest) {
    return this.interestService.postInterest(params.interest, params.user)
  }
}
