import { BookmarkRepository } from './../repositories/BookmarkRepository'
import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Bookmark, User } from '@progress/orm'
import { PostBookmarkRequest } from '@progress/api'

@Injectable()
export class BookmarkService {
  @InjectRepository(Bookmark) private readonly bookmarkRepository: BookmarkRepository

  async postBookmark(user: User, params: PostBookmarkRequest) {
    const bookmark = new Bookmark()
    if (params.url) bookmark.url = params.url
    if (params.siteName) bookmark.siteName = params.siteName
    if (params.title) bookmark.title = params.title
    if (params.description) bookmark.description = params.description
    if (params.screenshot) bookmark.screenshot = params.screenshot
    if (params.subScreenshot) bookmark.subScreenshot = params.subScreenshot
    if (user) bookmark.createdUser = user

    try {
      const result = await this.bookmarkRepository.save(bookmark)
    } catch (error) {
      console.log(error)

      if (error.code === 'ER_DUP_ENTRY') {
        console.log('[+] got it')
      }
    }
  }
}
