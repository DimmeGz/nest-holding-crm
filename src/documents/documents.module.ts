import { Module } from '@nestjs/common';

import { ContractsModule } from './contracts';
import { OrdersModule } from './orders';
import { OrdersConfirmationModule } from './orders-confirmation';
import { InvoiceModule } from './invoice';
import { CommissionInvoiceModule } from './commission-invoice';
import { CommissionPaymentModule } from './commission-payment';

@Module({
  imports: [
    ContractsModule,
    OrdersModule,
    OrdersConfirmationModule,
    InvoiceModule,
    CommissionInvoiceModule,
    CommissionPaymentModule,
  ],
})
export class DocumentsModule {}
