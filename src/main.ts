import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

const DESCRICAO_API =
  'API responsável por retornar os divisores e números primos com base em um número de entrada';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Desafio Framework')
    .setDescription(DESCRICAO_API)
    .setVersion('1.0')
    .addTag('Números')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(8080);
}
bootstrap();
