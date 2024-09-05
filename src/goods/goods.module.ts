import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Batch, Product, Service } from './entities';

@Module({
  imports: [TypeOrmModule.forFeature([Batch, Product, Service])],
})
export class GoodsModule {}
