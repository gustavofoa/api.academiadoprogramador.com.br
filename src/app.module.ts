import { Module } from '@nestjs/common';
import { AlunosModule } from "./alunos/alunos.module";
import {RootController} from "./root.controller";
import {FaixasModule} from "./faixas/faixas.module";

@Module({
  imports: [
      AlunosModule,
      FaixasModule
  ],
    controllers: [
        RootController
    ],
})
export class AppModule {}
