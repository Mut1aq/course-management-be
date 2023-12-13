import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { StudentsModule } from './students/students.module';
import { ModeratorsModule } from './moderators/moderators.module';
import { CoursesModule } from './content/courses/courses.module';
import { LecturesModule } from './content/lectures/lectures.module';

@Module({
  imports: [
    UsersModule,
    AuthModule,
    CoursesModule,
    StudentsModule,
    ModeratorsModule,
    LecturesModule,
  ],
})
export class ModulesModule {}
