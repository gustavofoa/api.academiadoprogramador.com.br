import { Controller, Get, HttpCode, Post, Req } from '@nestjs/common';
import { AlunosService } from './alunos.service';
import { Request } from 'express';

@Controller("alunos")
export class AlunosController {

  constructor(
      private readonly alunosService: AlunosService
  ) {

  }

  @Get()
  listar() {
    console.log('listando alunos')
    return this.alunosService.listar();
  }














  @Post("hotmart")
  cadastra(@Req() request: Request) {

    console.log('cadastrando novo aluno');

    console.log(request.body);

    return "Recebemos";

  }

}
