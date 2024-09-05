import { Module } from '@nestjs/common';

import { ContractsModule } from './contracts';
import { OrdersModule } from './orders';
import { OrdersConfirmationModule } from './orders-confirmation';

@Module({
  imports: [ContractsModule, OrdersModule, OrdersConfirmationModule],
})
export class DocumentsModule {}
