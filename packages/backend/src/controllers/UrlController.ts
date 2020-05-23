import { Body, Controller, Get, Post } from '@nestjs/common'

// import { PostUrlGetInfoRequest } from '@progress/api'
import { PostUrlGetInfoRequest } from '@progress/api'
import { UrlService } from '@services/UrlService'

@Controller('url')
export class UrlController {
	constructor(private readonly urlService: UrlService) {}

	@Post('/info')
	async postUrlInfo(@Body() params: PostUrlGetInfoRequest) {
		return await this.urlService.extractUrlInfo(params.url)
	}
}
