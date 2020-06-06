import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common'
import { PostResourceRequest } from '@progress/api'
import { User } from '@progress/orm'
import { JwtAuthGuard } from '@services/JwtAuthGuard'
import { ResourceService } from '@services/ResourceService'
import { CurrentUser } from '@utils/CustomDecorator'
import { Request } from 'express'

@Controller('resource')
export class ResourceController {
  constructor(private readonly resourceService: ResourceService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async getResource(@Req() req: Request, @CurrentUser() user: User) {
    console.log('ResourceController -> getResource -> user', user)
    console.log('ResourceController -> getResource -> req.user', req.user)

    return this.resourceService.getResource(1)
  }

  @Post()
  async postResource(@Body() params: PostResourceRequest) {
    return this.resourceService.registerResource(params)
  }
}
