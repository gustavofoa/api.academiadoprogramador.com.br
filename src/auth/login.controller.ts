import {Controller, Get, Post, Req} from '@nestjs/common';
import {LoginService} from "./login.service";
import {Request} from "express";
import {Aluno} from "../alunos/alunos.entity";

@Controller('login')
export class LoginController {

    constructor(
        private readonly loginService: LoginService
    ) {

    }

    @Post()
    async listar(@Req() request: Request) {

        console.log('Fazendo login');

        //extrair email/senha da requisição(body)
        const email = request.body.email;
        const senha = request.body.senha;

        //validar as credenciais email/senha
        return await this.loginService.autenticate(email, senha)

    }

}
