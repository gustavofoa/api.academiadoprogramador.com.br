import { Controller, Get, HttpCode, Post, Req } from '@nestjs/common';
import { FaixasService } from './faixas.service';

@Controller("faixas")
export class FaixasController {

  constructor(
      private readonly faixasService: FaixasService
  ) {

  }

  @Get()
  listar() {
    console.log('listando faixas')
    return this.faixasService.listar();
  }

}
