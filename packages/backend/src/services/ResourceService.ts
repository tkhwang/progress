import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PostResourceRequest } from '@progress/api';
import { Resource } from '@progress/orm';
import { ResourceRepository } from '../repositories/ResourceRepository';

@Injectable()
export class ResourceService {
  @InjectRepository(Resource) private readonly resourceRepository: ResourceRepository;

  async registerResource(params: PostResourceRequest) {
    const resource = new Resource();
    if (params.url) resource.url = params.url;
    if (params.siteName) resource.siteName = params.siteName;
    if (params.title) resource.title = params.title;
    if (params.description) resource.description = params.description;
    if (params.image) resource.image = params.image;
    if (params.mediaType) resource.mediaType = params.mediaType;
    if (params.contentType) resource.contentType = params.contentType;
    // if (params.creatUser) resource.createdUser = params.creatUser
    return this.resourceRepository.save(resource);
  }
}
