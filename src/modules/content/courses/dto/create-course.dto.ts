import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsString,
  Max,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';
import { i18nValidationMessage } from 'nestjs-i18n';
import { I18nTranslations } from 'resources/generated/i18n.generated';

export class CreateCourseDto {
  @ApiProperty({
    type: String,
    isArray: false,
    maxLength: 120,
    minLength: 30,
    name: 'name',
    required: true,
  })
  @MinLength(30, {
    message: i18nValidationMessage<I18nTranslations>('validation.minLength', {
      min: 30,
    }),
  })
  @MaxLength(120, {
    message: i18nValidationMessage<I18nTranslations>('validation.maxLength', {
      max: 120,
    }),
  })
  @IsString({
    message: i18nValidationMessage<I18nTranslations>('validation.isString'),
  })
  @IsNotEmpty({
    message: i18nValidationMessage<I18nTranslations>('validation.isNotEmpty'),
  })
  name!: string;

  @ApiProperty({
    type: String,
    isArray: false,
    maxLength: 3200,
    minLength: 120,
    name: 'description',
    required: true,
  })
  @MinLength(120, {
    message: i18nValidationMessage<I18nTranslations>('validation.minLength', {
      min: 120,
    }),
  })
  @MaxLength(3200, {
    message: i18nValidationMessage<I18nTranslations>('validation.maxLength', {
      max: 3200,
    }),
  })
  @IsString({
    message: i18nValidationMessage<I18nTranslations>('validation.isString'),
  })
  @IsNotEmpty({
    message: i18nValidationMessage<I18nTranslations>('validation.isNotEmpty'),
  })
  description!: string;

  @ApiProperty({
    type: Number,
    isArray: false,
    maximum: 400,
    minimum: 60,
    name: 'hours',
    required: true,
  })
  @Max(400, {
    message: i18nValidationMessage<I18nTranslations>('validation.max', {
      max: 400,
    }),
  })
  @Min(60, {
    message: i18nValidationMessage<I18nTranslations>('validation.min', {
      min: 60,
    }),
  })
  @IsNumber(
    { allowInfinity: false, allowNaN: false },
    { message: i18nValidationMessage<I18nTranslations>('validation.isInt') },
  )
  @IsNotEmpty({
    message: i18nValidationMessage<I18nTranslations>('validation.isNotEmpty'),
  })
  hours!: number;

  @ApiProperty({
    type: Number,
    isArray: false,
    maximum: 100000,
    minimum: 120,
    name: 'cost',
    required: true,
  })
  @Max(100000, {
    message: i18nValidationMessage<I18nTranslations>('validation.max', {
      max: 100000,
    }),
  })
  @Min(120, {
    message: i18nValidationMessage<I18nTranslations>('validation.min', {
      min: 120,
    }),
  })
  @IsNumber(
    { allowInfinity: false, allowNaN: false },
    { message: i18nValidationMessage<I18nTranslations>('validation.isInt') },
  )
  @IsNotEmpty({
    message: i18nValidationMessage<I18nTranslations>('validation.isNotEmpty'),
  })
  cost!: number;
}
