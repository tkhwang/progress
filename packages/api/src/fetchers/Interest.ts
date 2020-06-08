import { BaseAPI } from '../BaseAPI'
import { BaseModel } from '../models'
import {
  InterestGetInterestsRequest,
  InterestGetInterestsResponse,
  InterestPostInterestRequest,
  InterestPostInterestResponse,
} from '../models/InterestModel'

export class Interest extends BaseAPI {
  public async getInterests(
    request: InterestGetInterestsRequest,
  ): Promise<BaseModel<InterestGetInterestsResponse, string>> {
    const path = `/v1/interest?user=${request.user}`
    const { data } = await this.client.get(path)
    return data
  }

  public async postInterest(
    request: InterestPostInterestRequest,
  ): Promise<BaseModel<InterestPostInterestResponse, string>> {
    const path = '/v1/interest'
    const { data } = await this.client.post(path, request)
    return data
  }
}
