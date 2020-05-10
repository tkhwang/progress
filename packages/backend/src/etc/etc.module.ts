import { Module } from '@nestjs/common';
import { EtcController } from './etc.controller';

@Module({
  controllers: [EtcController]
})
export class EtcModule {}
