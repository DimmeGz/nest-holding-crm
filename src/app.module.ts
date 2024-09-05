import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TypeOrmModule } from '@nestjs/typeorm';

import { DB_CONFIG, VALIDATION_SCHEMA } from './config';

@Module({
  imports: [
    ConfigModule.forRoot({ validationSchema: VALIDATION_SCHEMA }),
    TypeOrmModule.forRoot(DB_CONFIG),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
