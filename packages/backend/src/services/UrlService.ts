import { Injectable } from '@nestjs/common';
import { PostUrlGetInfoResponse } from '@progress/api/models';
import { getLinkPreview } from 'link-preview-js';

@Injectable()
export class UrlService {
  async extractUrlInfo(url: string): Promise<PostUrlGetInfoResponse> {
    return getLinkPreview(url);
  }
}
