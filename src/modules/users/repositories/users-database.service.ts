import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../entities/user.entity';
import { UserDocument } from '../types/user-document.type';

@Injectable()
export class UsersDatabaseService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
  ) {}

  async findUserByCredentials(
    credentials: string,
  ): Promise<UserDocument | null> {
    const user = await this.userModel
      .findOne<UserDocument>({
        $or: [
          {
            email: credentials,
          },
          {
            username: credentials,
          },
        ],
      })
      .exec();
    return user;
  }
}
