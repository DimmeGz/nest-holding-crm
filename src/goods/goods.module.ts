import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Batch, Product } from './entities';

@Module({
  imports: [TypeOrmModule.forFeature([Batch, Product])],
})
export class GoodsModule {}
