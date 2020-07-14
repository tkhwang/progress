import { BookmarkRepository } from './../repositories/BookmarkRepository';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Bookmark } from '@progress/orm';
import { PostBookmarkRequest } from '@progress/api';

@Injectable()
export class BookmarkService {
  @InjectRepository(Bookmark) private readonly bookmarkRepository: BookmarkRepository;

  async postBookmark(params: PostBookmarkRequest) {}
}
