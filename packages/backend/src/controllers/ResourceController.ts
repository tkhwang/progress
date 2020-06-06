import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common'
import { PostResourceRequest } from '@progress/api'
import { User } from '@progress/orm'
import { JwtAuthGuard } from '@services/JwtAuthGuard'
import { ResourceService } from '@services/ResourceService'
import { CurrentUser } from '@utils/CustomDecorator'

@Controller('resource')
export class ResourceController {
  constructor(private readonly resourceService: ResourceService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async getResource(@CurrentUser() user: User) {
    return this.resourceService.getResource(user.id)
  }

  @Post()
  async postResource(@Body() params: PostResourceRequest) {
    return this.resourceService.registerResource(params)
  }
}
