import { Module } from '@nestjs/common';
import { ModeratorsService } from './moderators.service';
import { ModeratorsController } from './moderators.controller';

@Module({
  controllers: [ModeratorsController],
  providers: [ModeratorsService],
})
export class ModeratorsModule {}
