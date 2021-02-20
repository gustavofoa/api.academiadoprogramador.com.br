import { Controller, Get, Post, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller()
export class RootController {

  constructor(
  ) {

  }

  @Get()
  root() {
    console.log(process.env.DB_AP_HOST)
    console.log(process.env.DB_AP_HOST)
    return "Funcionou!";
  }




  @Post("hotmart")
  cadastra(@Req() request: Request) {

    console.log('cadastrando novo aluno');

    console.log(request.body);

    return "Recebemos";

  }

}
