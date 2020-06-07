import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common'
import { GetResourceResponse, PostResourceRequest } from '@progress/api'
import { User } from '@progress/orm'
import { JwtAuthGuard } from '@services/JwtAuthGuard'
import { ResourceService } from '@services/ResourceService'
import { CurrentUser } from '@utils/CustomDecorator'
import { plainToClass } from 'class-transformer'

@Controller('resource')
export class ResourceController {
  constructor(private readonly resourceService: ResourceService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async getResource(@CurrentUser() user: User) {
    const resources = await this.resourceService.getResource(user.id)
    return plainToClass(
      GetResourceResponse,
      { data: resources },
      { excludeExtraneousValues: true },
    )
  }

  @Post()
  async postResource(@Body() params: PostResourceRequest) {
    return this.resourceService.registerResource(params)
  }
}
