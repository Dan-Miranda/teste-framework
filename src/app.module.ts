import { Module } from '@nestjs/common';
import { NumeroModule } from './numeros/numero.module';

@Module({
  imports: [NumeroModule],
})
export class AppModule {}
