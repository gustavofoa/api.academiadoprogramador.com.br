import {Inject, Injectable, UnauthorizedException} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import {Repository} from "typeorm";
import {Aluno} from "../alunos/alunos.entity";
const sha1 = require('sha1');

@Injectable()
export class LoginService {

    constructor(
        @Inject('ALUNO_REPOSITORY')
        private alunosRepository: Repository<Aluno>,
        private jwtService: JwtService
    ) {

    }


    async autenticate(email: string, senha: string) {

        const aluno:Aluno = await this.alunosRepository.findOne({email: email});

        if(aluno && sha1(senha) === aluno.senha) {

            //gerar token JWT
            return {
                access_token: this.jwtService.sign({
                    nome: aluno.nome,
                    email: aluno.email,
                    faixa: aluno.faixa
                }),
            }
        }

        throw new UnauthorizedException();

    }

}
