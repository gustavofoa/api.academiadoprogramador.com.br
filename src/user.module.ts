import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { databaseProviders } from "./database.providers";
import {userProviders} from "./user.providers";

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService, ...databaseProviders, ...userProviders],
  exports: [...databaseProviders, ...userProviders]
})
export class UserModule {}
