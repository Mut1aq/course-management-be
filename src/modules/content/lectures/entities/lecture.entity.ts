import { Prop } from '@nestjs/mongoose';
import { SCHEMA_NAMES } from '@shared/constants/schema-names.constant';
import { Types } from 'mongoose';
import { MediaObjectI } from 'shared/interfaces/media-object.interface';

export class Lecture {
  @Prop({
    type: Number,
    min: 0,
    max: 500,
    required: true,
  })
  order!: number;

  @Prop({
    type: String,
    required: true,
    minlength: 5,
    maxlength: 120,
  })
  name!: string;

  @Prop({
    type: {
      url: String,
      lecture: {
        type: Types.ObjectId,
        ref: SCHEMA_NAMES.COURSE,
        required: true,
      },
      _id: false,
    },
    required: true,
  })
  video!: MediaObjectI;

  @Prop({
    type: String,
    required: true,
    minlength: 120,
    maxlength: 3200,
  })
  description!: string;

  @Prop({
    type: String,
    required: false,
    default: undefined,
  })
  code!: string;
}
