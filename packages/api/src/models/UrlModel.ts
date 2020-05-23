import { IsDefined, IsString } from 'class-validator'

export class PostUrlGetInfoRequest {
  @IsDefined()
  @IsString()
  public url: string
}

export class PostUrlGetInfoResponse {
  public url: string
  public title?: any
  public siteName?: any
  public description?: any
  public mediaType?: any
  public contentType?: string
  public images?: string[]
  public videos?: Array<{
    url: any;
    secureUrl: any;
    type: any;
    width: any;
    height: any;
  }>
  public favicons?: any[]
}
