import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { VersioningType } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  // Создать приложение с использованием Fastify.
  const app = await NestFactory.create(AppModule);

  // Добавить глобальный префикс `api`.
  app.setGlobalPrefix('api');

  // Добавить глобальное версионирование api.
  app.enableVersioning({
    type: VersioningType.URI,
  });

  // Настройка Swagger
  const config = new DocumentBuilder()
    .setTitle('Документация API')
    .setDescription('Автоматически сгенерированная документация для API')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // Слушать порт из .env файла или 3000
  await app.listen(process.env.PORT ? Number(process.env.PORT) : 3000);
}
// Запуск приложения.
// eslint-disable-next-line @typescript-eslint/no-floating-promises
bootstrap();
