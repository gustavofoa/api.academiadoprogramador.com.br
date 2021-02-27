import {Inject, Injectable} from '@nestjs/common';
import { Aluno } from "./alunos.entity";
import { Repository } from "typeorm";
import {EmailService} from "../shared/email.service";
const sha1 = require('sha1');

@Injectable()
export class AlunosService {

  constructor(
      @Inject('ALUNO_REPOSITORY')
      private alunosRepository: Repository<Aluno>,
      private emailService: EmailService,
  ) {}

  async get(id: number): Promise<Aluno> {

    return this.alunosRepository.findOne(id)

  }

  async listar(): Promise<Aluno[]> {

    return this.alunosRepository.find();
  }


  async create(aluno: Aluno) {

    //gerar uma senha e encriptar
    const senhaTemporaria = this.randomPassword(8)
    const senhaEncriptada = sha1(senhaTemporaria);

    //salvar o usuário no banco de dados com a senha encriptada
    aluno.senha = senhaEncriptada;
    await this.alunosRepository.save(aluno);

    //enviar um e-mail de boas vindas pro aluno
    const body = `
      Olá ${aluno.nome}.<br/>
                            <br/>
                            Seja muito bem vindo à <strong>{ Academia do Programador }</strong>!<br/>
                            <p>Estamos MUITO felizes em ter você aqui conosco.
                            E esperamos que aproveite tudo o que a { Academia do Programador }  pode te proporcionar!</p>
    
                            <p>Este é o endereço do portal do aluno: <a href=https://portal.academiadoprogramador.com.br/login>https://portal.academiadoprogramador.com.br/login</a></p>
                            E aqui estão os seus dados de acesso:<br/>
                            E-mail de acesso: ${aluno.email}<br/>
                            Senha Temporária: <strong>${senhaTemporaria}</strong>
                            <br/>
                            
                            <p><strong>Importante!!!</strong> Altere a sua senha quando fizer o seu primeiro acesso.</p>
                            
                            <p>Qualquer dúvida, basta responder este e-mail...</p>
    
                            Te esperamos do outro lado,<br/>
                            <br/>
                            Gustavo - { Academia do Programador }
    `;
    this.emailService.enviar(aluno.email, 'Seja bem vindo à { Academia do Programador }', body)

  }

  randomPassword (length) {
    //var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOP1234567890";
    var chars = "1234567890";
    var pass = "";
    for (var x = 0; x < length; x++) {
      var i = Math.floor(Math.random() * chars.length);
      pass += chars.charAt(i);
    }
    return pass;
  }

  async save(aluno: Aluno): Promise<Aluno> {

    return this.alunosRepository.save(aluno);

  }

}
