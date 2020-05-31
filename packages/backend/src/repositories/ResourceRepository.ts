import { Resource } from '@progress/orm'
import { EntityRepository, Repository } from 'typeorm'

@EntityRepository(Resource)
export class ResourceRepository extends Repository<Resource> {}
