import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './entities/user.entity';
import { UserDocument } from './types/user-document.type';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
  ) {}

  findUserByProperty(
    property: string,
    value: string,
  ): Promise<UserDocument | null> {
    return this.userModel.findOne<UserDocument>({ [property]: value }).exec();
  }
}
