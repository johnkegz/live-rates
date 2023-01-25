import { Module } from '@nestjs/common';
import { CurrencyService } from './currency.service';
import { DatabaseModule } from '../database/database.module';
import { CurrencyController } from './currency.controller';
import { currencyProviders } from './currency.providers';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [DatabaseModule, HttpModule],
  controllers: [CurrencyController],
  providers: [
    CurrencyService,
    ...currencyProviders,
  ],
  exports: [CurrencyService,
    ...currencyProviders]
})

export class CurrencyModule {}