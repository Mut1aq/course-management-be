import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Gender } from '@shared/enums/gender.enum';
import { Course } from 'modules/content/courses/entities/course.entity';
import { Types } from 'mongoose';
import { SCHEMA_NAMES } from 'shared/constants/schema-names.constant';

@Schema({ _id: false, timestamps: false })
export class StudentProperties {
  @Prop({
    type: [
      {
        type: Types.ObjectId,
        ref: SCHEMA_NAMES.COURSE,
      },
    ],
  })
  courses!: Course[];

  @Prop({
    type: String,
    required: true,
    minlength: 24,
    maxlength: 27,
  })
  birthday!: string;

  @Prop({
    type: String,
    required: true,
    minlength: 3,
    maxlength: 120,
  })
  university!: string;

  @Prop({
    type: String,
    required: true,
    minlength: 3,
    maxlength: 120,
  })
  major!: string;

  @Prop({
    type: Number,
    enum: Gender,
    required: true,
  })
  gender!: Gender;
}

export const studentPropertiesSchema =
  SchemaFactory.createForClass(StudentProperties);
