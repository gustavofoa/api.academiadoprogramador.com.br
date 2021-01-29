import { Module } from '@nestjs/common';
import { AlunosModule } from "./alunos/alunos.module";
import {RootController} from "./root.controller";

@Module({
  imports: [
      AlunosModule
  ],
    controllers: [
        RootController
    ],
})
export class AppModule {}
