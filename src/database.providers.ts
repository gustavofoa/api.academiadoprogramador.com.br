
import { createConnection } from 'typeorm'; // Object-Relational Mapping

export const databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: async () => await createConnection({
            type: 'mysql',
            host: process.env.DB_AP_HOST,
            port: 3306,
            username: process.env.DB_AP_USERNAME,
            password: process.env.DB_AP_PASSWORD,
            database: process.env.DB_AP_DATABASE,
            entities: ['dist/**/*.entity.js'],
            synchronize: false,
            migrationsRun: false
        }),
    },
];