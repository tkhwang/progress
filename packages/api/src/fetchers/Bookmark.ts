import { BaseAPI } from '../BaseAPI'
import { PostBookmarkRequest, BaseModel, PostBookmarkResponse } from '../models'

export class Bookmark extends BaseAPI {
  public async postBookmark(
    request: PostBookmarkRequest,
  ): Promise<BaseModel<PostBookmarkResponse, string>> {
    const path = '/v1/bookmark'
    const { data } = await this.client.post(path, request)
    return data
  }
}
