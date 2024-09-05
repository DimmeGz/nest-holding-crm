import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ContractsModule } from './contracts/';
import { CompaniesModule } from './companies/';

import { DB_CONFIG, VALIDATION_SCHEMA } from './config';

@Module({
  imports: [
    ConfigModule.forRoot({ validationSchema: VALIDATION_SCHEMA }),
    TypeOrmModule.forRoot(DB_CONFIG),
    ContractsModule,
    CompaniesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
