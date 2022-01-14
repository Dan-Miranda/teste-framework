import { OutputNumeroDivisorDto } from '../dtos/numero.dto';

interface NumeroService {
  calcularDivisores: (numero: number) => OutputNumeroDivisorDto;
}

export { NumeroService };
