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
      API_HOST: this.configService.get<string>('API_HOST'),
    }
  }
}
