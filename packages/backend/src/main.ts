import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import bodyParser from 'body-parser'
import 'module-alias/register'
import morgan from 'morgan'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  )
  app.use(bodyParser.json())
  // app.use(morgan('[:status]:method :url :response-time ms'))
  app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))
  app.enableCors()

  const globalPrefix = 'v1'
  app.setGlobalPrefix(globalPrefix)
  const port = process.env.PORT || 80

  await app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`Listening at http://localhost:${port}/${globalPrefix}`)
  })
}
bootstrap()
