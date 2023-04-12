import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as config from 'config';

console.log(config);
const dbConfig = config.get('db');

export const TypeORMConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: Number(process.env.DB_PORT) || dbConfig.port,
  username: process.env.DB_USERNAME || dbConfig.username,
  password: process.env.DB_PASSWORD || dbConfig.password,
  database: process.env.DB_DATABASE || dbConfig.database,
  entities: ['dist/*/entity/*.entity.{ts,js}'],
  synchronize: true,
  timezone: '+09:00',
};
