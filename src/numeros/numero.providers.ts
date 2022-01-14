import { Provider } from '@nestjs/common';
import { DivisorServiceImpl } from './services/divisores/divisorimpl.service';
import { PrimoServiceImpl } from './services/primos/primoImpl.service';

const providers: Array<Provider> = [
  {
    provide: 'DivisorService',
    useClass: DivisorServiceImpl,
  },
  {
    provide: 'PrimoService',
    useClass: PrimoServiceImpl,
  },
];

export { providers };
