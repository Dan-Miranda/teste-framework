import { Injectable } from '@nestjs/common';
import { OutputDivisorDto } from '../../dtos/outputDivisor.dto';
import { DivisorService } from './divisor.service';
import { validarRestoZero } from '../../utils/numero.util';
import { NumeroException } from '../../../exceptions/numero.exception';

@Injectable()
class DivisorServiceImpl implements DivisorService {
  private mapearDivisores(numero: number) {
    const divisores: Array<number> = [];

    for (let i = 1; i <= numero; i++) {
      if (validarRestoZero(numero, i)) {
        divisores.push(i);
      }
    }

    return divisores;
  }

  calcularDivisores(numero: number): OutputDivisorDto {
    if (numero < 1) {
      throw new NumeroException();
    }

    const divisores: Array<number> = this.mapearDivisores(numero);
    const outputDivisorDto: OutputDivisorDto = { divisores };
    return outputDivisorDto;
  }
}

export { DivisorServiceImpl };
