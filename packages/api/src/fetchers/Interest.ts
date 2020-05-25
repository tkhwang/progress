import { BaseAPI } from '../BaseAPI'
import {
  InterestGetInterestsRequest,
  InterestPostInterestRequest,
  InterestPostInterestResponse,
} from '../models/InterestModel'

export class Interest extends BaseAPI {
  public async getInterests(request: InterestGetInterestsRequest) {
    const path = `/v1/interest?user=${request.user}`
    const { data } = await this.client.get(path)
    return data
  }

  public async postInterest(
    request: InterestPostInterestRequest,
  ): Promise<InterestPostInterestResponse> {
    const path = '/v1/interest'
    const { data } = await this.client.post(path, request)
    return data
  }
}
