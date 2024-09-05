import { TypeOrmModuleOptions } from '@nestjs/typeorm';

import { Account, Company } from '../companies/entities';
import {
  Batch,
  BatchCustomField,
  CustomField,
  Package,
  Product,
  Service,
} from '../goods/entities';
import {
  CountryOfOrigin,
  Currency,
  CurrencyRate,
  Incoterms,
  TechnicalProcess,
} from '../libs/entities';
import { Warehouse, WarehouseAccounting } from '../warehouse/entities';

import { Contract } from '../documents/contracts/entities';

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
    BatchCustomField,
    Company,
    Contract,
    CountryOfOrigin,
    Currency,
    CurrencyRate,
    CustomField,
    Incoterms,
    Package,
    Product,
    Service,
    TechnicalProcess,
    Warehouse,
    WarehouseAccounting,
  ],
};
