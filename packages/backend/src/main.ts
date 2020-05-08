import 'module-alias/register'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
	const app = await NestFactory.create(AppModule)

	const globalPrefix = 'v1'
	app.setGlobalPrefix(globalPrefix)
	const port = process.env.PORT || 80

	await app.listen(port, () => {
		console.log(`Listening at http://localhost:${port}/${globalPrefix}`)
	})
}
bootstrap()
