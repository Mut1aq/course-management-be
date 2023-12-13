import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { UserDocument } from 'modules/users/types/user-document.type';
import { Types } from 'mongoose';
import { SCHEMA_NAMES } from 'shared/constants/schema-names.constant';

@Schema({ _id: false, timestamps: false })
export class Participants {
  @Prop({
    type: Types.ObjectId,
    ref: SCHEMA_NAMES.USER,
    required: [true, 'Course Student is required'],
  })
  student!: UserDocument;

  @Prop({
    type: String,
    required: true,
  })
  enrollDate!: string;

  @Prop({
    type: Number,
    min: 0,
    max: 100000,
    required: true,
  })
  amountPaid!: number;
}

export const participantsSchema = SchemaFactory.createForClass(Participants);
