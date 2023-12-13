import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { LecturesService } from './lectures.service';
import { CreateLectureDto } from './dto/create-lecture.dto';
import { UpdateLectureDto } from './dto/update-lecture.dto';
import { ApiTags } from '@nestjs/swagger';
import { ENDPOINTS } from '@shared/constants/endpoints.constant';

@ApiTags(ENDPOINTS.LECTURES.CONTROLLER)
@Controller(ENDPOINTS.LECTURES.CONTROLLER)
export class LecturesController {
  constructor(private readonly lecturesService: LecturesService) {}

  @Post(ENDPOINTS.LECTURES.CREATE)
  create(@Body() createLectureDto: CreateLectureDto) {
    return this.lecturesService.create(createLectureDto);
  }

  @Get(ENDPOINTS.LECTURES.FIND_ALL)
  findAll() {
    return this.lecturesService.findAll();
  }

  @Get(ENDPOINTS.LECTURES.FIND_ONE)
  findOne(@Param('lectureID') id: string) {
    return this.lecturesService.findOne(+id);
  }

  @Patch(ENDPOINTS.LECTURES.UPDATE)
  update(
    @Param('lectureID') id: string,
    @Body() updateLectureDto: UpdateLectureDto,
  ) {
    return this.lecturesService.update(+id, updateLectureDto);
  }

  @Delete(ENDPOINTS.LECTURES.DELETE)
  remove(@Param('lectureID') id: string) {
    return this.lecturesService.remove(+id);
  }
}
