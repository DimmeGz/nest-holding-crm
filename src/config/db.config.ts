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

import { Contract, ContractLine } from '../documents/contracts/entities';
import {
  Order,
  OrderLine,
  OrderServiceLine,
} from '../documents/orders/entities';
import {
  OrderConfirmation,
  OrderConfirmationLine,
} from '../documents/orders-confirmation/entities';
import {
  Invoice,
  InvoiceLine,
  InvoiceServiceLine,
} from '../documents/invoice/entities';
import { CommissionInvoice } from '../documents/commission-invoice/entities';
import { CommissionPayment } from '../documents/commission-payment/entities';
import { Payment, PaymentLine } from '../documents/payment/entities';

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
    CommissionInvoice,
    CommissionPayment,
    Company,
    Contract,
    ContractLine,
    CountryOfOrigin,
    Currency,
    CurrencyRate,
    CustomField,
    Incoterms,
    Invoice,
    InvoiceLine,
    InvoiceServiceLine,
    Order,
    OrderLine,
    OrderServiceLine,
    OrderConfirmation,
    OrderConfirmationLine,
    Package,
    Payment,
    PaymentLine,
    Product,
    Service,
    TechnicalProcess,
    Warehouse,
    WarehouseAccounting,
  ],
};
