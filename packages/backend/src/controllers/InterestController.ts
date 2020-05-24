import { Controller, Post, Body } from '@nestjs/common';
import { InterestService } from '@services/InterestService';
import { InterestPostInterestRequest } from '@progress/api';

@Controller('interest')
export class InterestController {
  constructor(private readonly interestService: InterestService) {}

  @Post('/')
  async posInterest(@Body() params: InterestPostInterestRequest) {
    return this.interestService.postInterest(params.interest, params.user);
  }
}
