import { Test, TestingModule } from '@nestjs/testing';
import { primoSample } from '../../samples/primo.sample';
import { OutputPrimoDto } from '../../../src/numeros/dtos/outputPrimo.dto';
import { PrimoService } from '../../../src/numeros/services/primos/primo.service';
import { PrimoServiceImpl } from '../../../src/numeros/services/primos/primoImpl.service';
import { NumeroException } from '../../../src/exceptions/numero.exception';

describe('Teste DivisorServiceImpl', () => {
  let primoService: PrimoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: 'PrimoService',
          useClass: PrimoServiceImpl,
        },
      ],
    }).compile();

    primoService = module.get<PrimoServiceImpl>('PrimoService');
  });

  test('DivisorServiceImpl deve estar definido', () => {
    expect(primoService).toBeDefined();
  });

  describe('Serviço calcularNumerosPrimos', () => {
    const valorEntrada = 10;
    describe(`A partir do valor de entrada = ${valorEntrada}`, () => {
      let valorRetornado: OutputPrimoDto;

      beforeEach(() => {
        valorRetornado = primoService.calcularNumerosPrimos(valorEntrada);
      });

      test('O valor retornado deve ser igual ao valor esperado', () => {
        expect(valorRetornado).toStrictEqual(primoSample);
      });

      describe('Caso o valor de entrada seja menor que 1', () => {
        const entrada = 0;
        test('Deve retornar erro', () => {
          expect(() =>
            primoService.calcularNumerosPrimos(entrada),
          ).toThrowError(NumeroException);
        });
      });
    });
  });
});
