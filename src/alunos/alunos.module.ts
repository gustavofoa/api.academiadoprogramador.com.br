import { Module } from '@nestjs/common';
import { AlunosController } from './alunos.controller';
import { AlunosService } from './alunos.service';
import { databaseProviders } from "../database.providers";
import {alunosProviders} from "./alunos.providers";
import {SharedModule} from "../shared/shared.module";

@Module({
  imports: [SharedModule],
  controllers: [
      AlunosController
  ],
  providers: [
      AlunosService,
    ...databaseProviders,
    ...alunosProviders
  ],
  exports: [...databaseProviders, ...alunosProviders]
})
export class AlunosModule {}
