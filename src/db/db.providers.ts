import { DataSource } from "typeorm"
import * as dotenv from 'dotenv';

// Carrega as variáveis de ambiente do arquivo .env
dotenv.config();

console.log(`ESTOU AQUI, LOCAL HOST -> ${process.env.DB_HOST}`)
export const databaseProviders = [
    {
        provide: 'DATA_SOURCE',
        useFactory: async () => {
            const dataSource = new DataSource({
                type: process.env.DB_TYPE as 'postgres', // Tipo do banco de dados
                host: process.env.DB_HOST,               // Host do banco de dados
                port: Number(process.env.DB_PORT),       // Porta do banco de dados
                username: process.env.DB_USERNAME,       // Usuário do banco de dados
                password: process.env.DB_PASSWORD,       // Senha do banco de dados
                database: process.env.DB_DATABASE,       // Nome do banco de dados
                entities: [
                    __dirname + '/../**/*.entity{.ts,.js}',
                ],
                synchronize: true,
            })

            try {
                await dataSource.initialize();
                console.log('Conexão com o banco de dados estabelecida com sucesso.');
                return dataSource;
            } catch (error) {
                console.error('Erro ao conectar ao banco de dados:', error);
                throw error; // Lança o erro para que possa ser tratado em outro lugar
            }
        }
    }
]