import { Module } from '@nestjs/common';

import { ContractsModule } from './contracts';
import { OrdersModule } from './orders';
import { OrdersConfirmationModule } from './orders-confirmation';
import { InvoiceModule } from './invoice';

@Module({
  imports: [
    ContractsModule,
    OrdersModule,
    OrdersConfirmationModule,
    InvoiceModule,
  ],
})
export class DocumentsModule {}
