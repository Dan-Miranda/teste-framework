import { Test, TestingModule } from '@nestjs/testing';
import { numeroSample } from '../../../test/samples/numero.sample';
import { NumeroServiceImpl } from '../../../src/numeros/services/numeroimpl.service';
import { OutputNumeroDivisorDto } from 'src/numeros/dtos/numero.dto';

describe('Teste NumeroServiceImpl', () => {
  let numeroServiceImpl: NumeroServiceImpl;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NumeroServiceImpl],
    }).compile();

    numeroServiceImpl = module.get<NumeroServiceImpl>(NumeroServiceImpl);
  });

  test('NumeroServiceImpl deve estar definido', () => {
    expect(numeroServiceImpl).toBeDefined();
  });

  describe('Serviço calcularDivisores', () => {
    const valorEntrada = 10;
    describe(`A partir do valor de entrada = ${valorEntrada}`, () => {
      let valorRetornado: OutputNumeroDivisorDto;

      beforeEach(() => {
        valorRetornado = numeroServiceImpl.calcularDivisores(valorEntrada);
      });

      test('O valor retornado deve ser igual ao valor esperado', () => {
        expect(valorRetornado).toStrictEqual(numeroSample);
      });
    });
  });

  describe('Serviço validarDivisor', () => {
    const valorEntrada = {
      divisor: 10,
      dividendo: 2,
    };

    describe(`A partir do valor de entrada = ${valorEntrada}`, () => {
      let valorRetornado: boolean;
      const valorEsperado = true;

      beforeEach(() => {
        valorRetornado = numeroServiceImpl.validarDivisor(
          valorEntrada.divisor,
          valorEntrada.dividendo,
        );
      });

      test('O valor retornado deve ser igual ao esperado', () => {
        expect(valorRetornado).toEqual(valorEsperado);
      });
    });
  });

  describe('Serviço mapearDivisores', () => {
    const valorEntrada = 10;

    describe(`A partir do valor de entrada = ${valorEntrada}`, () => {
      let valorRetornado: Array<number>;
      const valorEsperado = [1, 2, 5, 10];

      beforeEach(() => {
        valorRetornado = numeroServiceImpl.mapearDivisores(valorEntrada);
      });

      test('O valor retornado deve ser igual ao esperado', () => {
        expect(valorRetornado).toEqual(valorEsperado);
      });
    });
  });
});
