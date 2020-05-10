import { Controller, Get } from '@nestjs/common'

@Controller('etc')
export class EtcController {
	@Get('/health')
	async health() {
		return {
			message: 'Welcome to learn-in-public',
			now: new Date(),
		}
	}
}
