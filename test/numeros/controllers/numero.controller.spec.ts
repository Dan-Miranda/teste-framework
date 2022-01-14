import * as request from 'supertest';
import { Test, TestingModule } from '@nestjs/testing';
import { NumeroController } from '../../../src/numeros/numero.controller';
import { HttpStatus, INestApplication } from '@nestjs/common';
import { DivisorService } from '../../../src/numeros/services/divisores/divisor.service';
import { OutputNumeroDivisorDto } from '../../../src/numeros/dtos/numero.dto';
import { numeroSample } from '../../samples/numero.sample';
import { PrimoService } from '../../../src/numeros/services/primos/primo.service';
import { providers } from '../../../src/numeros/numero.providers';

describe('Teste NumeroController', () => {
  let numeroController: NumeroController;
  let divisorService: DivisorService;
  let primoService: PrimoService;
  let app: INestApplication;
  const input = 10;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NumeroController],
      providers,
    }).compile();

    numeroController = module.get<NumeroController>(NumeroController);
    divisorService = module.get<DivisorService>('DivisorService');
    primoService = module.get<PrimoService>('PrimoService');
    app = module.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  test('NumeroController deve estar definido', () => {
    expect(numeroController).toBeDefined();
  });

  describe('GET /numero/' + input, () => {
    describe(`Quando /numero/${input} é chamado`, () => {
      let valorRetornado: OutputNumeroDivisorDto;

      beforeEach(() => {
        valorRetornado = numeroController.mapearDivisoresEPrimos(input);
      });

      test('DivisorService deve estar definido', () => {
        expect(divisorService).toBeDefined();
      });

      test('DivisorService.calcularDivisores deve estar definido', () => {
        expect(divisorService.calcularDivisores).toBeDefined();
      });

      test('PrimoService deve estar definido', () => {
        expect(primoService).toBeDefined();
      });

      test('PrimoService.calcularDivisores deve estar definido', () => {
        expect(primoService.calcularNumerosPrimos).toBeDefined();
      });

      test('Para assim ser retornado o valor esperado', () => {
        return request(app.getHttpServer())
          .get(`/numeros/${input}`)
          .expect(HttpStatus.OK)
          .expect(valorRetornado);
      });

      test('O valor retornado deve ser igual ao valor esperado', () => {
        expect(valorRetornado).toStrictEqual(numeroSample);
      });

      describe('Caso o valor de entrada seja menor que 1', () => {
        const entrada = 0;
        test('Deve retornar erro', () => {
          return request(app.getHttpServer())
            .get(`/numeros/${entrada}`)
            .expect(HttpStatus.BAD_REQUEST);
        });
      });
    });
  });
});
