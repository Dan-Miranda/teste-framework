import { Controller, Get, Inject, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { OutputNumeroDto } from './dtos/outputuNumeroDto';
import { DivisorService } from './services/divisores/divisor.service';
import { PrimoService } from './services/primos/primo.service';

@ApiTags('Números')
@Controller('/numeros')
export class NumeroController {
  constructor(
    @Inject('DivisorService')
    private readonly divisorService: DivisorService,
    @Inject('PrimoService')
    private readonly primoService: PrimoService,
  ) {}

  @Get('/:numero')
  mapearDivisoresEPrimos(@Param('numero') numero: number): OutputNumeroDto {
    const { divisores } = this.divisorService.calcularDivisores(numero);
    const { primos } = this.primoService.calcularNumerosPrimos(numero);
    const outputNumeroDto: OutputNumeroDto = { divisores, primos };
    return outputNumeroDto;
  }
}
