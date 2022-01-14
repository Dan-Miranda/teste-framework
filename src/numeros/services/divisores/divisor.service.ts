import { OutputDivisorDto } from '../../dtos/outputDivisor.dto';

interface DivisorService {
  calcularDivisores: (numero: number) => OutputDivisorDto;
}

export { DivisorService };
