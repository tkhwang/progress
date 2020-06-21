import { Body, Controller, Get, Post } from '@nestjs/common'
// import { PostUrlGetInfoRequest, PostUrlGetInfoResponse } from '@progress/api/models';
import { UrlService } from '@services/UrlService'
import { PostUrlGetInfoRequest, PostUrlGetInfoResponse } from '@progress/api'

@Controller('url')
export class UrlController {
  constructor(private readonly urlService: UrlService) {}

  @Post('/info')
  async postUrlInfo(@Body() params: PostUrlGetInfoRequest) {
    const [urlInfo, screenshot] = await Promise.all([
      this.urlService.extractUrlInfo(params.url),
      this.urlService.toImage(params.userId, params.url),
    ])

    if (urlInfo) urlInfo.screenshot = screenshot ? screenshot : ''
    return urlInfo
  }
}
