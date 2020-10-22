import { Controller, Get } from '@nestjs/common';
import { AlunoService } from './aluno.service';
import { Aluno } from "./aluno.entity";

@Controller("alunos")
export class AlunoController {

  constructor(private readonly alunoService: AlunoService) {
  }

  @Get("me")
  getMe(): Promise<Aluno> {

    // É um valor fake, e esta informação virá do token de acesso que virá na requisição HTTP.
    const idAlunoLogado: number = 2;

    return this.alunoService.get(idAlunoLogado);

  }

}
