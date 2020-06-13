import { classToPlain } from 'class-transformer'
import * as jwt from 'jsonwebtoken'

export class Cookie {
  static readonly COOKIE_KEY = '_pgauth'
  static readonly EXPIRES = 1 * 365 * 24 * 60 * 60 * 1000 // 1y

  static COOKIE_OPTIONS = {
    domain: process.env.COOKIE_DOMAIN,
    path: '/',
    secure: process.env.DEBUG !== 'true',
    httpOnly: false,
    maxAge: Cookie.EXPIRES,
  }
}
