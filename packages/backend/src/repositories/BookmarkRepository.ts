import { EntityRepository, Repository } from 'typeorm'
import { Bookmark } from '@progress/orm'

@EntityRepository(Bookmark)
export class BookmarkRepository extends Repository<Bookmark> {}
