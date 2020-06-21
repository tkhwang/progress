import { IsDefined, IsString, IsNumber } from 'class-validator'

export class PostUrlGetInfoRequest {
  @IsDefined()
  @IsNumber()
  userId: number

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
  public screenshot?: string
  public videos?: {
    url: any;
    secureUrl: any;
    type: any;
    width: any;
    height: any;
  }[]
}
