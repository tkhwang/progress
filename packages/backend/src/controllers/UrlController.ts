import { Body, Controller, Get, Post } from '@nestjs/common'
// import { PostUrlGetInfoRequest, PostUrlGetInfoResponse } from '@progress/api/models';
import { UrlService } from '@services/UrlService'
import { PostUrlGetInfoRequest, PostUrlGetInfoResponse } from '@progress/api'

@Controller('url')
export class UrlController {
  constructor(private readonly urlService: UrlService) {}

  @Post('/info')
  async postUrlInfo(@Body() params: PostUrlGetInfoRequest): Promise<PostUrlGetInfoResponse> {
    const urlInfo = await this.urlService.extractUrlInfo(params.url)
    await this.urlService.toImage(params.userId, params.url)

    return urlInfo
  }
}
