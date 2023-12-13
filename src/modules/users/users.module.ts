import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { userMongooseFeature } from './entities/user.entity';
import { StudentsDatabaseService } from './repositories/students-database.service';
import { ModeratorsDatabaseService } from './repositories/moderators-database.service';
import { UsersDatabaseService } from './repositories/users-database.service';

@Module({
  controllers: [UsersController],
  providers: [
    UsersService,
    StudentsDatabaseService,
    ModeratorsDatabaseService,
    UsersDatabaseService,
  ],
  imports: [MongooseModule.forFeature([userMongooseFeature])],
  exports: [
    UsersService,
    StudentsDatabaseService,
    ModeratorsDatabaseService,
    UsersDatabaseService,
  ],
})
export class UsersModule {}
