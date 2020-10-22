
import { createConnection } from 'typeorm';

export const databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: async () => await createConnection({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'academiadoprogramador',
            password: 'academiadoprogramador',
            database: 'academiadoprogramador',
            entities: ['dist/**/*.entity.js'],
            synchronize: true,
        }),
    },
];