import { createParamDecorator } from '@nestjs/common'
import { Request } from 'express'

export const CurrentUser = createParamDecorator((_, req: Request) => {
  return req.user
})
