import { NumeroController } from './numero.controller';
import { Module } from '@nestjs/common';
import { providers } from './numero.providers';

@Module({
  controllers: [NumeroController],
  providers,
})
export class NumeroModule {}
