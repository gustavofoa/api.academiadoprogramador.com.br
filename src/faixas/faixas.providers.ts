
import { Connection } from 'typeorm';
import {Faixa} from "./faixas.entity";

export const faixasProviders = [
    {
        provide: 'FAIXA_REPOSITORY',
        useFactory: (connection: Connection) => connection.getRepository(Faixa),
        inject: ['DATABASE_CONNECTION'],
    },
];