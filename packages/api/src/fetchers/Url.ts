import { BaseAPI } from '../BaseAPI'
import { PostUrlGetInfoRequest, PostUrlGetInfoResponse } from '../models'

export class Url extends BaseAPI {
  /**
   * Extract URL open-graph info
   * @param request : PostUrlGetInfoRequest
   * @returns url info : PostUrlGetInfoResponse
   */
  public async postUrlInfo(request: PostUrlGetInfoRequest): Promise<PostUrlGetInfoResponse> {
    const path = '/v1/url/info'
    return this.client.post(path, request)
  }
}
