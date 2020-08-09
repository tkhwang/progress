import { BookmarkService } from './../services/BookmarkService'
import { Controller, UseGuards, Post, Body } from '@nestjs/common'
import { JwtAuthGuard } from '@services/JwtAuthGuard'
import { PostBookmarkRequest } from '@progress/api'
import { User } from '@progress/orm'
import { CurrentUser } from '@utils/CustomDecorator'

@Controller('bookmark')
@UseGuards(JwtAuthGuard)
export class BookmarkController {
  constructor(private readonly bookmarkService: BookmarkService) {}

  @Post('/')
  async postBookmark(@CurrentUser() user: User, @Body() params: PostBookmarkRequest) {
    return this.bookmarkService.postBookmark(user, params)
  }
}
