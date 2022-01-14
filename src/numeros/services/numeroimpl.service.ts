import { Injectable } from '@nestjs/common';
import { OutputNumeroDivisorDto } from '../dtos/numero.dto';
import { NumeroService } from './numero.service';

@Injectable()
export class NumeroServiceImpl implements NumeroService {
  mapearDivisores(numero: number) {
    const divisores: Array<number> = [];

    for (let i = 1; i <= numero; i++) {
      if (this.validarDivisor(numero, i)) {
        divisores.push(i);
      }
    }

    return divisores;
  }

  validarDivisor(divisor: number, dividendo: number): boolean {
    return divisor % dividendo == 0;
  }

  calcularDivisores(numero: number): OutputNumeroDivisorDto {
    const divisores: Array<number> = this.mapearDivisores(numero);
    const outputNumeroDivisorDto: OutputNumeroDivisorDto = { divisores };
    return outputNumeroDivisorDto;
  }
}
