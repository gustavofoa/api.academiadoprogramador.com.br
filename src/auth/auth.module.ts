import { Module } from '@nestjs/common';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';
import {AlunosModule} from "../alunos/alunos.module";
import {JwtModule} from "@nestjs/jwt";
import { jwtConstants } from './constants';

@Module({
  controllers: [LoginController],
  providers: [LoginService],
  imports: [
      AlunosModule,
      JwtModule.register({
        secret: jwtConstants.secret,
        signOptions: { expiresIn: '60s' },
      })
  ],
    exports: [JwtModule]
})
export class AuthModule {}
