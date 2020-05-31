import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { PostResourceRequest } from '@progress/api'
import { Resource, User } from '@progress/orm'
import { UsersRepository } from '@repositories/UsersRepository'
import { ResourceRepository } from '../repositories/ResourceRepository'

@Injectable()
export class ResourceService {
  @InjectRepository(Resource) private readonly resourceRepository: ResourceRepository
  @InjectRepository(User) private readonly usersRepository: UsersRepository

  async registerResource(params: PostResourceRequest) {
    const resource = new Resource()
    if (params.url) resource.url = params.url
    if (params.siteName) resource.siteName = params.siteName
    if (params.title) resource.title = params.title
    if (params.description) resource.description = params.description
    if (params.image) resource.image = params.image
    if (params.mediaType) resource.mediaType = params.mediaType
    if (params.contentType) resource.contentType = params.contentType
    if (params.creatUser) {
      const user = await this.usersRepository.findOne(params.creatUser)
      if (user) resource.createdUser = user
    }
    return this.resourceRepository.save(resource)
  }
}
