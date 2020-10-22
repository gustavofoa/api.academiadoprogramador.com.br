import {Inject, Injectable} from '@nestjs/common';
import { User } from "./user.entity";
import {Repository} from "typeorm";

@Injectable()
export class UserService {

  constructor(
      @Inject('USER_REPOSITORY')
      private userRepository: Repository<User>,
  ) {}

  async get(id: number): Promise<User> {

    return this.userRepository.findOne(id)

  }

}
