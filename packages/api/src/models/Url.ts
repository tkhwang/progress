import { IsDefined, IsString } from 'class-validator'

export class PostUrlGetInfoRequest {
	@IsDefined()
	@IsString()
	url: string
}

export type PostUrlGetInfoResponse = GetLinkPreviewSimpleResponse | GetLinkPreviewFullResponse

export class GetLinkPreviewSimpleResponse {
	url: string
	mediaType: string
	contentType: string
	favicons: any[]
}
export class GetLinkPreviewFullResponse {
	url: string
	title: any
	siteName: any
	description: any
	mediaType: any
	contentType: string | undefined
	images: string[]
	videos: {
		url: any
		secureUrl: any
		type: any
		width: any
		height: any
	}[]
	favicons: any[]
}
