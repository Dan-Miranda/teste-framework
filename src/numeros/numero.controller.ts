import { Controller, Get, Inject, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { OutputNumeroDivisorDto } from './dtos/numero.dto';
import { NumeroService } from './services/numero.service';

@ApiTags('Números')
@Controller('/numeros')
export class NumeroController {
  constructor(
    @Inject('NumeroService')
    private readonly appService: NumeroService,
  ) {}

  @Get('/:numero')
  calcularDivisores(@Param('numero') numero: number): OutputNumeroDivisorDto {
    return this.appService.calcularDivisores(numero);
  }
}
