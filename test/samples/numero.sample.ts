import { OutputNumeroDto } from '../../src/numeros/dtos/outputuNumeroDto';
import { divisorSample } from './divisor.sample';
import { primoSample } from './primo.sample';

const numeroSample: OutputNumeroDto = {
  divisores: divisorSample.divisores,
  primos: primoSample.primos,
};

export { numeroSample };
