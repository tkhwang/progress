import { Controller, Get } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'

@Controller('etc')
export class EtcController {
	constructor(private readonly configService: ConfigService) {}

	@Get('/health')
	async health() {
		return {
			message: 'Welcome to learn-in-public',
			now: new Date(),
			PROGRESS_API_URL: this.configService.get<string>('PROGRESS_API_URL')
		}
	}
}
