import { Module } from '@nestjs/common';

import { ContractsModule } from './contracts';
import { OrdersModule } from './orders';
import { OrdersConfirmationModule } from './orders-confirmation';
import { InvoiceModule } from './invoice';
import { CommissionInvoiceModule } from './commission-invoice';
import { CommissionPaymentModule } from './commission-payment';
import { PaymentModule } from './payment';
import { ShipmentModule } from './shipment';
import { ReceiveModule } from './receive';

@Module({
  imports: [
    ContractsModule,
    OrdersModule,
    OrdersConfirmationModule,
    InvoiceModule,
    CommissionInvoiceModule,
    CommissionPaymentModule,
    PaymentModule,
    ShipmentModule,
    ReceiveModule,
  ],
})
export class DocumentsModule {}
