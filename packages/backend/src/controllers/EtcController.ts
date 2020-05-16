import { Controller, Get } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'

@Controller('etc')
export class EtcController {
	constructor(private configService: ConfigService) {}

	@Get('/health')
	async health() {
		return {
			message: 'Welcome to learn-in-public',
			now: new Date(),
			local: this.configService.get<string>('local.oauth.google.url'),
			dev: this.configService.get<string>('dev.oauth.google.url'),
		}
	}
}
