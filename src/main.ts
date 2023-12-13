import { HttpStatus } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { useContainer } from 'class-validator';
import { LoggerService } from 'core/libs/logger/logger.service';
import { I18nValidationExceptionFilter, I18nValidationPipe } from 'nestjs-i18n';
import { AppModule } from './app.module';
import * as compression from 'compression';
import helmet from 'helmet';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  // ======================================================
  // ? Initialization
  // ======================================================
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    bufferLogs: true,
  });
  const configService = app.get<ConfigService>(ConfigService);

  app.useLogger(app.get(LoggerService));

  // ======================================================
  // ! security
  // ======================================================

  app.use(compression());
  app.enable('trust proxy');
  app.set('etag', 'strong');
  app.useBodyParser('json', { limit: '50mb' });
  app.useBodyParser('urlencoded', { limit: '50mb', extended: true });
  app.use(helmet());
  app.enableCors({
    credentials: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    maxAge: 3600,
    origin: configService.get('ALLOWED_HOSTS')!,
  });
  app.enableShutdownHooks();

  // ======================================================
  // * configs
  // ======================================================

  app.setGlobalPrefix(configService.get<string>('PREFIX')!);

  app.useGlobalPipes(
    new I18nValidationPipe({
      whitelist: true,
      transform: true,
      forbidUnknownValues: true,
      validateCustomDecorators: true,
      forbidNonWhitelisted: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  app.useGlobalFilters(
    new I18nValidationExceptionFilter({
      detailedErrors: false,
      errorHttpStatusCode: HttpStatus.BAD_REQUEST,
    }),
  );

  useContainer(app.select(AppModule), { fallbackOnErrors: true });
  await app.listen(+configService.get<number>('PORT')! || 3000);
}
bootstrap();
