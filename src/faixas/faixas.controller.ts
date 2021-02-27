import {Controller, Get, HttpCode, Post, Req, UseGuards} from '@nestjs/common';
import { FaixasService } from './faixas.service';
import {AlunosGuard} from "../auth/alunos.guard";

@Controller("faixas")
export class FaixasController {

  constructor(
      private readonly faixasService: FaixasService
  ) {

  }

  @Get()
  @UseGuards(AlunosGuard)
  listar() {
    console.log('listando faixas')
    return this.faixasService.listar();
  }

}
