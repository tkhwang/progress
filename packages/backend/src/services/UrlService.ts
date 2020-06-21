import { Injectable } from '@nestjs/common'
import { PostUrlGetInfoResponse } from '@progress/api/models'
import { getLinkPreview } from 'link-preview-js'
import puppeteer from 'puppeteer'
import { S3 } from 'src/lib/S3'

@Injectable()
export class UrlService {
  async extractUrlInfo(url: string): Promise<PostUrlGetInfoResponse> {
    return getLinkPreview(url)
  }

  async toImage(userId: number, url: string): Promise<string | null> {
    try {
      const browser = await puppeteer.launch()
      const page = await browser.newPage()

      await page.emulate(puppeteer.devices['iPhone 6'])
      await page.setViewport({
        width: 1280,
        height: 800,
      })

      await page.goto(url)
      // const fileName = `${new Date().getTime().toString()}.jpg`
      const buffer = await page.screenshot({
        type: 'png',
        fullPage: false,
      })
      await browser.close()

      return await S3.uploadToS3('resources', userId, buffer)
    } catch (error) {
      // tslint:disable-next-line:no-console
      console.error(error)
      return null
    }
  }
}
