import { HttpException, HttpStatus } from '@nestjs/common';

class NumeroException extends HttpException {
  constructor() {
    super(
      'Números menores que 1 não podem ser resolvidos',
      HttpStatus.BAD_REQUEST,
    );
  }
}

export { NumeroException };
