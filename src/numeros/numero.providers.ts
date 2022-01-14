import { Provider } from '@nestjs/common';
import { NumeroServiceImpl } from './services/numeroimpl.service';

const providers: Array<Provider> = [
  {
    provide: 'NumeroService',
    useClass: NumeroServiceImpl,
  },
];

export { providers };
