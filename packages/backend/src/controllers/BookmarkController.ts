import { BookmarkService } from './../services/BookmarkService'
import { Controller, UseGuards, Post, Body } from '@nestjs/common'
import { JwtAuthGuard } from '@services/JwtAuthGuard'
import { PostBookmarkRequest } from '@progress/api'

@Controller('bookmark')
@UseGuards(JwtAuthGuard)
export class BookmarkController {
  constructor(private readonly bookmarkService: BookmarkService) {}

  @Post()
  async postBookmark(@Body() params: PostBookmarkRequest) {}
}
