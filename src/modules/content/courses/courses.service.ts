import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { SCHEMA_NAMES } from '@shared/constants/schema-names.constant';
import { ResponseFromServiceClassI } from '@shared/interfaces/response.interface';
import { Model } from 'mongoose';
import { I18nService } from 'nestjs-i18n';
import { I18nTranslations } from 'resources/generated/i18n.generated';
import { CreateCourseDto } from './dto/create-course.dto';
import { Course } from './entities/course.entity';
import { CourseDocument } from './types/course-document.type';

@Injectable()
export class CoursesService {
  constructor(
    @InjectModel(SCHEMA_NAMES.COURSE)
    private readonly courseModel: Model<Course>,
    private readonly i18n: I18nService<I18nTranslations>,
  ) {}

  async create(
    createCourseDto: CreateCourseDto,
  ): Promise<ResponseFromServiceClassI<CourseDocument>> {
    const createdCourse = new this.courseModel(createCourseDto);
    await createdCourse.save();
    return {
      message: this.i18n.translate('shared.success.create', {
        args: {
          entity: this.i18n.translate('entities.course'),
        },
      }),
      statusCode: HttpStatus.OK,
      data: createdCourse,
    };
  }
}
