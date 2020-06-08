import { BaseAPI } from '../BaseAPI'
import { BaseModel, GetResourceRequest, GetResourceResponse, PostResourceRequest } from '../models'

export class Resource extends BaseAPI {
  public async getResource(
    request: GetResourceRequest,
  ): Promise<BaseModel<GetResourceResponse, string>> {
    const path = `/v1/resource?interest=${request.interest}`
    const { data } = await this.client.get(path)
    return data
  }

  public async postInterest(request: PostResourceRequest) {
    const path = '/v1/resource'
    const { data } = await this.client.post(path, request)
    return data
  }
}
