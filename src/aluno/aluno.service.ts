import {Inject, Injectable} from '@nestjs/common';
import { Aluno } from "./aluno.entity";
import { Repository } from "typeorm";

@Injectable()
export class AlunoService {

  constructor(
      @Inject('ALUNO_REPOSITORY')
      private alunoRepository: Repository<Aluno>,
  ) {}

  async get(id: number): Promise<Aluno> {

    return this.alunoRepository.findOne(id)

  }

}
