import { Module } from '@nestjs/common';
import { AlunosController } from './alunos.controller';
import { AlunosService } from './alunos.service';
import { databaseProviders } from "../database.providers";
import {alunosProviders} from "./alunos.providers";
import {EmailService} from "./email.service";

@Module({
  imports: [],
  controllers: [
      AlunosController
  ],
  providers: [
      AlunosService,
      EmailService,
    ...databaseProviders,
    ...alunosProviders
  ],
  exports: [...databaseProviders, ...alunosProviders]
})
export class AlunosModule {}
