import { Module } from '@nestjs/common'
import { EtcController } from './etc.controller'
import { ConfigModule } from '@nestjs/config'

@Module({
	imports: [ConfigModule],
	controllers: [EtcController],
})
export class EtcModule {}
