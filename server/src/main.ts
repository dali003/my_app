
// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   app.enableCors({
//     origin: '*', // Allow requests from all origins
//     methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//   });
//   await app.listen(3000);
// }

import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Dali example')
    .setDescription('The Dali API description')
    .setVersion('1.0')
    .addTag('Dali')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
