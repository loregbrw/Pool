import path from "path";
import { DataSource, DataSourceOptions, Migration } from "typeorm";
import "dotenv/config";

const buildSettings = (): DataSourceOptions => {
    const entitiesPath: string = path.join(__dirname, './entities/**.{ts,js}');
    const migrationPath: string = path.join(__dirname, './migrations/**.{ts,js}');
    const nodeEnv: string | undefined = process.env.NODE_ENV; 

    if (nodeEnv === 'test') {
        return {
          type: 'sqlite',
          database: ':memory:',
          synchronize: true,
          entities: [entitiesPath],
        };
    }
    
    // const dbUrl: string | undefined = process.env.DB_URL;
    const dbType: string | undefined = process.env.DB_TYPE;

    // if (!dbUrl) throw new Error("Missing env var: 'DB_URL'");
    if (!dbType) throw new Error("Missing env var: 'DB_TYPE'");

    return {
        type: dbType as "postgres" | "mssql",
        host: "localhost",
        username: "server",
        password: "pass",
        database: "Pool",
        entities: [entitiesPath],
        migrations: [migrationPath],
        options: {
            trustServerCertificate: true,
            encrypt: true
        }
    };
}

const AppDataSource = new DataSource(buildSettings());

export default AppDataSource;