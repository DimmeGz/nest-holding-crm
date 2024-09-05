import { TypeOrmModuleOptions } from '@nestjs/typeorm';

import { Account, Company } from '../companies/entities';
import { Contract } from '../contracts/entities';
import { Batch, Product, Service } from '../goods/entities';
import { Currency, CurrencyRate } from '../libs/entities';
import { Warehouse } from '../warehouse/entities';

export const DB_CONFIG: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [
    Account,
    Batch,
    Company,
    Contract,
    Currency,
    CurrencyRate,
    Product,
    Service,
    Warehouse,
  ],
};
