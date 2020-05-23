import { Body, Controller, Get, Post } from '@nestjs/common';
import { PostUrlGetInfoRequest, PostUrlGetInfoResponse } from '@progress/api';
import { UrlService } from '@services/UrlService';

@Controller('url')
export class UrlController {
  constructor(private readonly urlService: UrlService) {}

  @Post('/info')
  async postUrlInfo(@Body() params: PostUrlGetInfoRequest): Promise<PostUrlGetInfoResponse> {
    return this.urlService.extractUrlInfo(params.url);
  }
}
