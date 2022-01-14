import { validarRestoZero } from '../../utils/numero.util';
import { OutputPrimoDto } from '../../dtos/outputPrimo.dto';
import { PrimoService } from './primo.service';
import { NumeroException } from '../../../exceptions/numero.exception';

class PrimoServiceImpl implements PrimoService {
  calcularNumerosPrimos(numero: number): OutputPrimoDto {
    const primos = this.mapearNumerosPrimos(numero);
    const outputPrimoDto: OutputPrimoDto = { primos };
    return outputPrimoDto;
  }

  private mapearNumerosPrimos(numero: number): Array<number> {
    if (numero < 1) {
      throw new NumeroException();
    }
    const numerosPrimos: Array<number> = [];

    for (let i = 1; i < numero; i++) {
      const isNumeroPrimo = validarRestoZero(numero, i);
      if (isNumeroPrimo) {
        numerosPrimos.push(i);
      }
    }

    return numerosPrimos;
  }
}

export { PrimoServiceImpl };
