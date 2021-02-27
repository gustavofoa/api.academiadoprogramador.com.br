import { Module } from '@nestjs/common';
import { FaixasController } from './faixas.controller';
import { FaixasService } from './faixas.service';
import { databaseProviders } from "../database.providers";
import {faixasProviders} from "./faixas.providers";
import {AuthModule} from "../auth/auth.module";

@Module({
  imports: [
      AuthModule
  ],
  controllers: [
      FaixasController
  ],
  providers: [
      FaixasService,
    ...databaseProviders,
    ...faixasProviders
  ],
  exports: [...faixasProviders]
})
export class FaixasModule {}
