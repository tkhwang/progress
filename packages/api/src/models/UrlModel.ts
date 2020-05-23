import { IsDefined, IsString } from 'class-validator'

export class PostUrlGetInfoRequest {
  @IsDefined()
  @IsString()
  public url: string
}

export type PostUrlGetInfoResponse = GetLinkPreviewSimpleResponse | GetLinkPreviewFullResponse

export class GetLinkPreviewSimpleResponse {
  public url: string
  public mediaType: string
  public contentType: string
  public favicons: any[]
}

export class GetLinkPreviewFullResponse {
  public url: string
  public title: any
  public siteName: any
  public description: any
  public mediaType: any
  public contentType: string | undefined
  public images: string[]
  public videos: Array<{
    url: any;
    secureUrl: any;
    type: any;
    width: any;
    height: any;
  }>
  public favicons: any[]
}
