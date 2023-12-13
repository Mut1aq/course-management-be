import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateStudentDto } from 'modules/students/dto/create-student.dto';
import { Model } from 'mongoose';
import { User } from '../entities/user.entity';
import { UserDocument } from '../types/user-document.type';

@Injectable()
export class StudentsDatabaseService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
  ) {}
  async createStudent(createStudentDto: CreateStudentDto) {
    const createdUser = new this.userModel(createStudentDto);
    await createdUser.save();
    return createdUser;
  }
}
