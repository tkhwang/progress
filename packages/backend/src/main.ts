import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import bodyParser from 'body-parser'
import 'module-alias/register'
import morgan from 'morgan'
import { AppModule } from './app.module'
import { LoggerMiddleware } from './middlwares/LoggerMiddleware'

async function bootstrap() {
  const nestApp = await NestFactory.create(AppModule)
  nestApp.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  )
  nestApp.use(new LoggerMiddleware().use)
  nestApp.use(bodyParser.json())
  // app.use(morgan('[:status]:method :url :response-time ms'))
  nestApp.use(morgan(':method :url :status :res[content-length] - :response-time ms'))
  nestApp.enableCors()

  const globalPrefix = 'v1'
  nestApp.setGlobalPrefix(globalPrefix)
  const port = process.env.PORT || 80

  await nestApp.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`Listening at http://localhost:${port}/${globalPrefix}`)
  })
}
bootstrap()
