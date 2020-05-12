import 'module-alias/register'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import bodyParser from 'body-parser'
import morgan from 'morgan'

async function bootstrap() {
	const app = await NestFactory.create(AppModule)
	app.use(bodyParser.json())
	app.use(morgan('[:status]:method :url :response-time ms'))
	app.enableCors()

	const globalPrefix = 'v1'
	app.setGlobalPrefix(globalPrefix)
	const port = process.env.PORT || 80

	await app.listen(port, () => {
		console.log(`Listening at http://localhost:${port}/${globalPrefix}`)
	})
}
bootstrap()
