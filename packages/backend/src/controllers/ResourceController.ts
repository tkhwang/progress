import { Body, Controller, Post } from '@nestjs/common'
import { PostResourceRequest } from '@progress/api'
import { ResourceService } from '@services/ResourceService'

@Controller('resource')
export class ResourceController {
  constructor(private readonly resourceService: ResourceService) {}

  @Post()
  async postResource(@Body() params: PostResourceRequest) {
    return this.resourceService.registerResource(params)
  }
}
