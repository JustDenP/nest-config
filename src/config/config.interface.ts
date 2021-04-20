export interface Config {
  typeorm: TypeOrmConfig;
}

export interface TypeOrmConfig {
  type: string;
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
  synchronize: boolean;
  logging: boolean;
  entities: any[];
}
