import { Body, Controller, Get, Post, UseGuards, Query } from '@nestjs/common'
import { GetResourceResponse, PostResourceRequest, GetResourceRequest } from '@progress/api'
import { User } from '@progress/orm'
import { JwtAuthGuard } from '@services/JwtAuthGuard'
import { ResourceService } from '@services/ResourceService'
import { CurrentUser } from '@utils/CustomDecorator'

@Controller('resource')
export class ResourceController {
  constructor(private readonly resourceService: ResourceService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async getResource(
    @CurrentUser() user: User,
    @Query() param: GetResourceRequest,
  ): Promise<GetResourceResponse> {
    return this.resourceService.getResource(user.id, param.interest)
  }

  @Post()
  async postResource(@Body() params: PostResourceRequest) {
    return this.resourceService.registerResource(params)
  }
}
