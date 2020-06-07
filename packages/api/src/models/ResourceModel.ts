import { Expose, Type } from 'class-transformer'

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

export class GetResourceRequest {}

export class GetResourceResponse {
  @Expose()
  @Type(() => GetResourceResponseModel)
  public data: GetResourceResponseModel[]
}

export class GetResourceResponseModel {
  @Expose()
  public id: number
  @Expose()
  public url?: string
  @Expose()
  public siteName?: string
  @Expose()
  public title: string
  @Expose()
  public description?: string
  @Expose()
  public image?: string
  @Expose()
  public mediaType?: string
  @Expose()
  public contentType?: string
}

export class PostResourceRequest extends ResourceCardModel {
  public creatUser: number
}
