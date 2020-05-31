import { IsDefined, IsString } from 'class-validator'

export class PostUrlGetInfoRequest {
  @IsDefined()
  @IsString()
  public url: string
}

export class PostUrlGetInfoResponse {
  public url: string
  public mediaType?: string
  public contentType?: string
  public favicons: string[]
  public title?: string
  public siteName?: string
  public description?: string
  public images?: string[]
  public videos?: Array<{
    url: any;
    secureUrl: any;
    type: any;
    width: any;
    height: any;
  }>
}

export class InterestResourceCardModel {
  public url?: string
  public mediaType?: string
  public contentType?: string
  public favicons?: string[]
  public title?: string
  public siteName?: string
  public description?: string
  public image?: string
}
