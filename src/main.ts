import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import config from './config';

async function bootstrap() {
  const { exposePort } = config;

  const app = NestFactory.create<NestExpressApplication>(AppModule);
  (await app).enableCors();
  (await app).listen(exposePort);
}
bootstrap();
