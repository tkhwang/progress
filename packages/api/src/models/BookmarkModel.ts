export class BookmarkModel {
  public siteName?: string
  public url: string
  public title?: string
  public screenshot?: string
  public subScreenshot?: string
  public memo?: string
  public interests: string[]
  public createdAt: Date
}

export class PostBookmarkRequest extends BookmarkModel {
  public userId: number
}
