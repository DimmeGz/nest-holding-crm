import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Company } from '../companies/entities';
import { Contract } from '../contracts/entities';

export const DB_CONFIG: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [Company, Contract],
};
