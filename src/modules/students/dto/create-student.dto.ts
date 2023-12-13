import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { I18nTranslations } from 'resources/generated/i18n.generated';
import { i18nValidationMessage } from 'nestjs-i18n';
import { Transform } from 'class-transformer';
import { MatchTwoProperties } from 'modules/users/decorators/match-two-properties.decorator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateStudentDto {
  @MaxLength(320, {
    message: i18nValidationMessage<I18nTranslations>('validation.maxLength', {
      property: 'Email',
      characters: 320,
    }),
  })
  @MinLength(3, {
    message: i18nValidationMessage<I18nTranslations>('validation.minLength', {
      property: 'Email',
      characters: 3,
    }),
  })
  @IsString({
    message: i18nValidationMessage<I18nTranslations>('validation.isString', {
      property: 'Email',
    }),
  })
  @IsEmail(undefined, {
    message: i18nValidationMessage<I18nTranslations>('validation.email', {
      property: 'Email',
    }),
  })
  @IsNotEmpty({
    message: i18nValidationMessage<I18nTranslations>('validation.isNotEmpty', {
      property: 'Email',
    }),
  })
  email!: string;

  @ApiProperty({
    maxLength: 240,
    minLength: 4,
    required: true,
    type: String,
    description: "Student's Full Name",
    isArray: false,
    example: 'Mutlaq Alsadeed',
    name: 'fullName',
  })
  @MinLength(4, {
    message: i18nValidationMessage<I18nTranslations>('validation.minLength', {
      property: 'Full Name',
      characters: 4,
    }),
  })
  @MaxLength(240, {
    message: i18nValidationMessage<I18nTranslations>('validation.maxLength', {
      property: 'Full Name',
      characters: 240,
    }),
  })
  @IsString({
    message: i18nValidationMessage<I18nTranslations>('validation.isString', {
      property: 'Full Name',
    }),
  })
  @Transform((param) => param?.value?.trim())
  @IsNotEmpty({
    message: i18nValidationMessage<I18nTranslations>('validation.isNotEmpty', {
      property: 'Full Name',
    }),
  })
  fullName!: string;

  @MatchTwoProperties('confirmPassword')
  @MaxLength(20, {
    message: i18nValidationMessage<I18nTranslations>('validation.maxLength', {
      property: 'Password',
      characters: 20,
    }),
  })
  @MinLength(8, {
    message: i18nValidationMessage<I18nTranslations>('validation.minLength', {
      property: 'Password',
      characters: 8,
    }),
  })
  @IsString({
    message: i18nValidationMessage<I18nTranslations>('validation.isNotEmpty', {
      property: 'Password',
    }),
  })
  @IsNotEmpty({
    message: i18nValidationMessage<I18nTranslations>('validation.isNotEmpty', {
      property: 'Password',
    }),
  })
  password!: string;

  @IsNotEmpty({
    message: i18nValidationMessage<I18nTranslations>('validation.isNotEmpty', {
      property: 'Confirm Password',
    }),
  })
  confirmPassword!: string;

  @ApiProperty({
    description: "User's birthday",
    type: 'date string',
    required: true,
    example: 'MM/DD/YYYY',
    name: 'birthday',
    minimum: 13,
  })
  @Transform(({ value }) => new Date(value))
  @IsNotEmpty({
    message: i18nValidationMessage<I18nTranslations>('validation.isNotEmpty', {
      property: 'Birth Day',
    }),
  })
  birthday!: string;
}
