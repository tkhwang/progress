export class ResourceCardModel {
  public url?: string
  public mediaType?: string
  public contentType?: string
  public favicons?: string[]
  public title?: string
  public siteName?: string
  public description?: string
  public image?: string
}

export class PostResourceRequest extends ResourceCardModel {
  public creatUser: number
}
