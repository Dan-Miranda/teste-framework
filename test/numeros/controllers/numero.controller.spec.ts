import * as request from 'supertest';
import { Test, TestingModule } from '@nestjs/testing';
import { numeroSample } from '../../../test/samples/numero.sample';
import { NumeroController } from '../../../src/numeros/numero.controller';
import { NumeroServiceImpl } from '../../../src/numeros/services/numeroimpl.service';
import { HttpStatus, INestApplication } from '@nestjs/common';
import { NumeroService } from 'src/numeros/services/numero.service';
import { OutputNumeroDivisorDto } from 'src/numeros/dtos/numero.dto';

describe('NumeroController', () => {
  let numeroController: NumeroController;
  let numeroService: NumeroService;
  let app: INestApplication;
  const input = 10;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NumeroController],
      providers: [
        {
          provide: 'NumeroService',
          useClass: NumeroServiceImpl,
        },
      ],
    }).compile();

    numeroController = module.get<NumeroController>(NumeroController);
    numeroService = module.get<NumeroService>('NumeroService');
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
        valorRetornado = numeroController.calcularDivisores(input);
      });

      test('NumeroService deve estar definido', () => {
        expect(numeroService).toBeDefined();
      });

      test('NumeroService.calcularDivisores deve estar definido', () => {
        expect(numeroService.calcularDivisores).toBeDefined();
      });

      test('Para assim ser retornado o valor esperado', () => {
        return request(app.getHttpServer())
          .get('/numeros/' + input)
          .expect(HttpStatus.OK)
          .expect(valorRetornado);
      });

      test('O valor retornado deve ser igual ao valor esperado', () => {
        expect(valorRetornado).toStrictEqual(numeroSample);
      });
    });
  });
});
