import { Controller, Post, Body, Get, Query } from '@nestjs/common'
import { InterestService } from '@services/InterestService'
import { InterestPostInterestRequest, InterestGetInterestsRequest } from '@progress/api'

@Controller('interest')
export class InterestController {
  constructor(private readonly interestService: InterestService) {}

  @Get('/')
  async getInterests(@Query() params: InterestGetInterestsRequest) {
    return this.interestService.getInterests(params.user)
  }

  @Post('/')
  async posInterest(@Body() params: InterestPostInterestRequest) {
    return this.interestService.postInterest(params.interest, params.user)
  }
}
