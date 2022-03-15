import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { svelteTemplateEngine } from './svelteTemplateEngine';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.engine('svelte', svelteTemplateEngine);
  app.setViewEngine('svelte');

  await app.listen(3000);
  Logger.log(`Server bekerja di: ${await app.getUrl()}`);
}
bootstrap();
