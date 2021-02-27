import { Module } from '@nestjs/common';
import { AlunosModule } from "./alunos/alunos.module";
import {RootController} from "./root.controller";
import {FaixasModule} from "./faixas/faixas.module";
import { SharedModule } from './shared/shared.module';

@Module({
  imports: [
      AlunosModule,
      FaixasModule,
      SharedModule
  ],
    controllers: [
        RootController
    ],
})
export class AppModule {}
