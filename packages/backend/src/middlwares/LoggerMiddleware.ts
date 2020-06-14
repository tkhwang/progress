import { Injectable, NestMiddleware } from '@nestjs/common'
import * as express from 'express'
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable'

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(request: express.Request, response: express.Response, next: (err?: any) => any): any {
    if (process.env.DEBUG) {
      // tslint:disable-next-line:no-console
      console.log('\n')
      // tslint:disable-next-line:no-console
      console.log('url -> ', request.originalUrl)
      // tslint:disable-next-line:no-console
      console.log('cookies -> ', request.cookies)
      // tslint:disable-next-line:no-console
      console.log('query -> ', request.query)
      // tslint:disable-next-line:no-console
      console.log('params -> ', request.params)
      // tslint:disable-next-line:no-console
      console.log('body ->', request.body)
      // tslint:disable-next-line:no-console
      console.log('header ->', request.headers)
    }
    next()
  }
}
