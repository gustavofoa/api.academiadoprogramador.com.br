
import { Connection } from 'typeorm';
import { Aluno } from './aluno.entity';

export const alunoProviders = [
    {
        provide: 'ALUNO_REPOSITORY',
        useFactory: (connection: Connection) => connection.getRepository(Aluno),
        inject: ['DATABASE_CONNECTION'],
    },
];