import { Roles } from '@decorators/roles.decorator';
import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ENDPOINTS } from '@shared/constants/endpoints.constant';
import { Role } from '@shared/enums/role.enum';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';

@ApiTags(ENDPOINTS.COURSES.CONTROLLER)
@Controller(ENDPOINTS.COURSES.CONTROLLER)
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Roles(Role.ADMIN)
  @Post(ENDPOINTS.COURSES.CREATE)
  create(@Body() createCourseDto: CreateCourseDto) {
    return this.coursesService.create(createCourseDto);
  }
}
