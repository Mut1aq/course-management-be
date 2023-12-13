import { Module } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CoursesController } from './courses.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { courseMongooseFeature } from './entities/course.entity';

@Module({
  controllers: [CoursesController],
  providers: [CoursesService],
  imports: [MongooseModule.forFeature([courseMongooseFeature])],
})
export class CoursesModule {}
