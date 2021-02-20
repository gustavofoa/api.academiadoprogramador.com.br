import {Inject, Injectable} from '@nestjs/common';
import { Repository } from "typeorm";
import { Faixa } from "./faixas.entity";

@Injectable()
export class FaixasService {

  constructor(
      @Inject('FAIXA_REPOSITORY')
      private faixasRepository: Repository<Faixa>,
  ) {}

  async listar(): Promise<Faixa[]> {
    return this.faixasRepository.find();
  }

}
