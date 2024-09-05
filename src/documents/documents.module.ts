import { Module } from '@nestjs/common';

import { ContractsModule } from './contracts';
import { OrdersModule } from './orders';
import { OrdersConfirmationModule } from './orders-confirmation';
import { InvoiceModule } from './invoice';
import { CommissionInvoiceModule } from './commission-invoice';
import { CommissionPaymentModule } from './commission-payment';
import { PaymentModule } from './payment';

@Module({
  imports: [
    ContractsModule,
    OrdersModule,
    OrdersConfirmationModule,
    InvoiceModule,
    CommissionInvoiceModule,
    CommissionPaymentModule,
    PaymentModule,
  ],
})
export class DocumentsModule {}
