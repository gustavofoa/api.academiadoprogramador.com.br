
import { Connection } from 'typeorm';
import { Aluno } from './alunos.entity';

export const alunosProviders = [
    {
        provide: 'ALUNO_REPOSITORY',
        useFactory: (connection: Connection) => connection.getRepository(Aluno),
        inject: ['DATABASE_CONNECTION'],
    },
];