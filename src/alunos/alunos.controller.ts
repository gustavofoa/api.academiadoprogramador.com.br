import { Controller, Get, HttpCode, Post, Req } from '@nestjs/common';
import { AlunosService } from './alunos.service';
import { Request } from 'express';
import {Aluno} from "./alunos.entity";

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

    const aluno: Aluno = new Aluno();
    aluno.nome = request.body.name;
    aluno.email = request.body.email;

    this.alunosService.create(aluno);

  }

}
