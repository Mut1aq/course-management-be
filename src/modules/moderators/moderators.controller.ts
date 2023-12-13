import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ModeratorsService } from './moderators.service';
import { CreateModeratorDto } from './dto/create-moderator.dto';
import { UpdateModeratorDto } from './dto/update-moderator.dto';
import { ApiTags } from '@nestjs/swagger';
import { ENDPOINTS } from '@shared/constants/endpoints.constant';

@ApiTags(ENDPOINTS.MODERATORS.CONTROLLER)
@Controller(ENDPOINTS.MODERATORS.CONTROLLER)
export class ModeratorsController {
  constructor(private readonly moderatorsService: ModeratorsService) {}

  @Post(ENDPOINTS.MODERATORS.CREATE)
  create(@Body() createModeratorDto: CreateModeratorDto) {
    return this.moderatorsService.create(createModeratorDto);
  }

  @Get(ENDPOINTS.MODERATORS.FIND_ALL)
  findAll() {
    return this.moderatorsService.findAll();
  }

  @Get(ENDPOINTS.MODERATORS.FIND_ONE)
  findOne(@Param('moderatorID') id: string) {
    return this.moderatorsService.findOne(+id);
  }

  @Patch(ENDPOINTS.MODERATORS.UPDATE)
  update(
    @Param('moderatorID') id: string,
    @Body() updateModeratorDto: UpdateModeratorDto,
  ) {
    return this.moderatorsService.update(+id, updateModeratorDto);
  }

  @Delete(ENDPOINTS.MODERATORS.DELETE)
  remove(@Param('moderatorID') id: string) {
    return this.moderatorsService.remove(+id);
  }
}
