import { Test, TestingModule } from '@nestjs/testing';
import { divisorSample } from '../../samples/divisor.sample';
import { DivisorServiceImpl } from '../../../src/numeros/services/divisores/divisorimpl.service';
import { OutputNumeroDivisorDto } from '../../../src/numeros/dtos/numero.dto';
import { NumeroException } from '../../../src/exceptions/numero.exception';

describe('Teste DivisorServiceImpl', () => {
  let divisorServiceImpl: DivisorServiceImpl;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DivisorServiceImpl],
    }).compile();

    divisorServiceImpl = module.get<DivisorServiceImpl>(DivisorServiceImpl);
  });

  test('DivisorServiceImpl deve estar definido', () => {
    expect(divisorServiceImpl).toBeDefined();
  });

  describe('Serviço calcularDivisores', () => {
    const valorEntrada = 10;
    describe(`A partir do valor de entrada = ${valorEntrada}`, () => {
      let valorRetornado: OutputNumeroDivisorDto;

      beforeEach(() => {
        valorRetornado = divisorServiceImpl.calcularDivisores(valorEntrada);
      });

      test('O valor retornado deve ser igual ao valor esperado', () => {
        expect(valorRetornado).toStrictEqual(divisorSample);
      });
    });

    describe('Caso o valor de entrada seja menor que 1', () => {
      const entrada = 0;
      test('Deve retornar erro', () => {
        expect(() =>
          divisorServiceImpl.calcularDivisores(entrada),
        ).toThrowError(NumeroException);
      });
    });
  });
});
