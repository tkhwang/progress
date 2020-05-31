import { BaseAPI } from '../BaseAPI'
import { PostResourceRequest } from '../models'

export class Resource extends BaseAPI {
  public async postInterest(request: PostResourceRequest) {
    const path = '/v1/resource'
    const { data } = await this.client.post(path, request)
    return data
  }
}
