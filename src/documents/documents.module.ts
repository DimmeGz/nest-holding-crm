import { Module } from '@nestjs/common';

import { ContractsModule } from './contracts';
import { OrdersModule } from './orders';

@Module({
  imports: [ContractsModule, OrdersModule],
})
export class DocumentsModule {}
