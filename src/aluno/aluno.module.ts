import { Module } from '@nestjs/common';
import { AlunoController } from './aluno.controller';
import { AlunoService } from './aluno.service';
import { databaseProviders } from "../database.providers";
import {alunoProviders} from "./aluno.providers";

@Module({
  imports: [],
  controllers: [AlunoController],
  providers: [AlunoService, ...databaseProviders, ...alunoProviders],
  exports: [...databaseProviders, ...alunoProviders]
})
export class AlunoModule {}
