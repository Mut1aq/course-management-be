import { ModelDefinition, Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SCHEMA_NAMES } from '@shared/constants/schema-names.constant';
import { MediaObjectI } from '@shared/interfaces/media-object.interface';
import { Lecture } from 'modules/content/lectures/entities/lecture.entity';
import { Types } from 'mongoose';
import { Participants, participantsSchema } from './participant.entity';

@Schema({ timestamps: false })
export class Course {
  @Prop({
    type: String,
    required: true,
    minlength: 30,
    maxlength: 120,
  })
  name!: string;

  @Prop({
    type: String,
    required: true,
    minlength: 120,
    maxlength: 3200,
  })
  description!: string;

  @Prop({
    type: Number,
    required: true,
    min: 60,
    max: 400,
  })
  hours!: number;

  @Prop({
    type: Number,
    required: true,
    min: 120,
    max: 100000,
  })
  cost!: number;

  @Prop({
    type: [
      {
        url: String,
        publicID: String,
        _id: false,
      },
    ],
    required: true,
  })
  videos!: MediaObjectI[];

  @Prop({
    type: [
      {
        url: String,
        publicID: String,
        _id: false,
      },
    ],
    required: true,
  })
  images!: MediaObjectI[];

  @Prop({
    type: [participantsSchema],
  })
  participants!: Participants;

  @Prop({ type: [{ type: Types.ObjectId, ref: SCHEMA_NAMES.LECTURE }] })
  lectures!: Lecture[];
}

const courseSchema = SchemaFactory.createForClass(Course);

export const courseMongooseFeature: ModelDefinition = {
  name: Course.name,
  schema: courseSchema,
};
