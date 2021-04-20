import { registerAs } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const CONNECTION_TYPE = 'postgres';

export default registerAs(
  'typeorm',
  (): TypeOrmModuleOptions => ({
    type: CONNECTION_TYPE,
    host: process.env.DB_HOST || 'default_value',
    port: +process.env.DB_PORT || 3000,
    username: process.env.DB_USERNAME || 'default_value',
    password: process.env.DB_PASSWORD || 'default_value',
    database: process.env.DB_NAME || 'default_value',
    synchronize: process.env.NODE_ENV !== 'prod',
    logging: true,
    entities: [],
  }),
);
