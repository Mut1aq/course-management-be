import { HydratedDocument } from 'mongoose';
import { Course } from '../entities/course.entity';

export type CourseDocument = HydratedDocument<Course>;
