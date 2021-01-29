import {Inject, Injectable} from '@nestjs/common';
import { Aluno } from "./alunos.entity";
import { Repository } from "typeorm";

@Injectable()
export class AlunosService {

  constructor(
      @Inject('ALUNO_REPOSITORY')
      private alunosRepository: Repository<Aluno>,
  ) {}

  async get(id: number): Promise<Aluno> {

    return this.alunosRepository.findOne(id)

  }

  async listar(): Promise<Aluno[]> {

    return this.alunosRepository.find();
  }


  async save(aluno: Aluno): Promise<Aluno> {

    return this.alunosRepository.save(aluno);

  }

}
