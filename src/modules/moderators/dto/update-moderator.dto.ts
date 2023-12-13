import { PartialType } from '@nestjs/mapped-types';
import { CreateModeratorDto } from './create-moderator.dto';

export class UpdateModeratorDto extends PartialType(CreateModeratorDto) {}
