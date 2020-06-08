import { BaseAPI } from '../BaseAPI'
import { PostUrlGetInfoRequest, PostUrlGetInfoResponse, BaseModel } from '../models';

export class Url extends BaseAPI {
  /**
   * Extract URL open-graph info
   * @param request : PostUrlGetInfoRequest
   * @returns url info : PostUrlGetInfoResponse
   */
  public async postUrlInfo(request: PostUrlGetInfoRequest): Promise<BaseModel<PostUrlGetInfoResponse, string>> {
    const path = '/v1/url/info'
    const { data } = await this.client.post(path, request)
    return data
  }
}
