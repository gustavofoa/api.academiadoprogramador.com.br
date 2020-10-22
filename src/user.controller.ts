import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from "./user.entity";

@Controller("/users")
export class UserController {

  constructor(private readonly userService: UserService) {
  }

  @Get("/me")
  getMe(): Promise<User> {

    // É um valor fake, e esta informação virá do token de acesso que virá na requisição HTTP.
    const idUser: number = 1;

    return this.userService.get(idUser);

  }

}