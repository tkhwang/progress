import { BaseAPI } from '../BaseAPI'
import { InterestPostInterestRequest, InterestPostInterestResponse } from '../models/InterestModel'

export class Interest extends BaseAPI {
  public async postInterest(
    request: InterestPostInterestRequest,
  ): Promise<InterestPostInterestResponse> {
    const path = '/v1/interest'
    const { data } = await this.client.post(path, request)
    return data
  }
}
