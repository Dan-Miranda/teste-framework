import { OutputPrimoDto } from '../../dtos/outputPrimo.dto';

interface PrimoService {
  calcularNumerosPrimos: (numero: number) => OutputPrimoDto;
}

export { PrimoService };
