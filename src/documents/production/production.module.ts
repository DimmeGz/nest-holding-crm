import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Production } from './entities';

@Module({
  imports: [TypeOrmModule.forFeature([Production])],
})
export class ProductionModule {}
