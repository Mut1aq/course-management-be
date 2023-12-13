import { ModelDefinition, Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {
  studentPropertiesSchema,
  StudentProperties,
} from 'modules/students/entities/student-properties.entity';
import { Role } from 'shared/enums/role.enum';

@Schema({
  timestamps: true,
})
export class User {
  @Prop({
    type: String,
    trim: true,
    minlength: 5,
    maxlength: 320,
    unique: true,
    required: [true, 'Email must be provided'],
  })
  email!: string;

  @Prop({
    type: String,
    required: true,
  })
  password!: string;

  @Prop({
    type: String,
    required: true,
    minlength: 2,
    maxlength: 100,
  })
  fullName!: string;

  @Prop({
    type: Number,
    enum: Role,
    default: Role.STUDENT,
  })
  role!: Role;

  @Prop({
    type: studentPropertiesSchema,
    default: undefined,
    required: false,
  })
  studentProperties?: StudentProperties;
}

export const userSchema = SchemaFactory.createForClass(User);

export const userMongooseFeature: ModelDefinition = {
  name: User.name,
  schema: userSchema,
};
