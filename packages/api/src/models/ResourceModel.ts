import { Expose } from 'class-transformer'
import { IsDefined } from 'class-validator'

export class ResourceCardModel {
  public url?: string
  public mediaType?: string
  public contentType?: string
  public favicons?: string[]
  public title?: string
  public siteName?: string
  public description?: string
  public image?: string
  public screenshot?: string
}

export class GetResourceRequest {
  @IsDefined()
  public interest: string
}

export type GetResourceResponse = GetResourceResponseModel[]

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
  public screenshot?: string
  @Expose()
  public mediaType?: string
  @Expose()
  public contentType?: string
}

export class PostResourceRequest extends ResourceCardModel {
  @IsDefined()
  public creatUser: number

  @IsDefined()
  public interest: string
}
