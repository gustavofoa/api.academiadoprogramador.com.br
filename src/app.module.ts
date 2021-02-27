import { Module } from '@nestjs/common';
import { AlunosModule } from "./alunos/alunos.module";
import {RootController} from "./root.controller";
import {FaixasModule} from "./faixas/faixas.module";
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
      AlunosModule,
      FaixasModule,
      SharedModule,
      AuthModule
  ],
    controllers: [
        RootController
    ],
})
export class AppModule {}
