import { CacheModuleAsyncOptions } from '@nestjs/cache-manager';
import { ConfigModuleOptions, ConfigService } from '@nestjs/config';
import { JwtModuleAsyncOptions } from '@nestjs/jwt';
import { MongooseModuleAsyncOptions } from '@nestjs/mongoose';
import { redisStore } from 'cache-manager-redis-yet';
import * as Joi from 'joi';
import {
  QueryResolver,
  HeaderResolver,
  AcceptLanguageResolver,
  CookieResolver,
} from 'nestjs-i18n';
import { I18nOptions } from 'nestjs-i18n/dist/interfaces';
import { join } from 'path';
import { RedisClientOptions } from 'redis';

export const configOptions: ConfigModuleOptions = {
  isGlobal: true,
  envFilePath: `.${process.env.NODE_ENV ?? 'development'}.env`,
  validationSchema: Joi.object({
    MONGODB_URI: Joi.string().uri().required(),
    NODE_ENV: Joi.string()
      .valid('development', 'production')
      .default('development'),
  }),
};

export const mongooseOptions: MongooseModuleAsyncOptions = {
  useFactory: async (configService: ConfigService) => ({
    uri: configService.get<string>('MONGODB_URI')!,
    retryAttempts: 10,
    dbName: `courseManagement${
      configService.get<string>('NODE_ENV')!.charAt(0).toUpperCase() +
      configService.get<string>('NODE_ENV')!.slice(1)
    }DB`,
  }),
  inject: [ConfigService],
};

export const jwtOptions: JwtModuleAsyncOptions = {
  useFactory: async (configService: ConfigService) => ({
    secret: configService.get<string>('USER_ACCESS_TOKEN_SECRET')!,
    signOptions: {
      expiresIn: configService.get<string>('USER_ACCESS_TOKEN_EXPIRES_IN')!,
    },
  }),
  inject: [ConfigService],

  global: true,
};

export const redisOptions: CacheModuleAsyncOptions<RedisClientOptions> = {
  useFactory: async (configService: ConfigService) => ({
    store: redisStore,
    socket: {
      host: configService.get<string>('REDIS_HOST')!,
      port: configService.get<string>('REDIS_PORT')!,
      tls: false,
    },
  }),
  isGlobal: true,
  inject: [ConfigService],
};

export const i18nOptions: I18nOptions = {
  fallbackLanguage: 'en',
  loaderOptions: {
    path: join(__dirname, '../../resources/i18n'),
    watch: true,
  },
  typesOutputPath: join(
    `${process.cwd()}/src/resources/generated/i18n.generated.ts`,
  ),
  resolvers: [
    { use: QueryResolver, options: ['lang', 'locale', 'l'] },
    new HeaderResolver(['x-custom-lang']),
    AcceptLanguageResolver,
    new CookieResolver(['lang', 'locale', 'l']),
  ],
};
