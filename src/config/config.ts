import { Config } from './config.interface';

const config: Config = {
  typeorm: {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: process.env.NODE_ENV !== 'prod',
    logging: true,
    entities: [],
  },
};

export default (): Config => config;
