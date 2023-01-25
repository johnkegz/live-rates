import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CurrencyRatesController } from './currency-rates/currency-rates.controller';
import { CurrencyRatesModule } from './currency-rates/currency-rates.module';
import { CurrencyRates } from './currency-rates';
import { CurrencyModule } from './currency/currency.module';
import { DatabaseModule } from './database/database.module';
import { Database } from './database';
import { Currency } from './currency';
import { CurrencyGatewayModule } from './currency/getway/currency.gateway.module';
import { ScheduleModule } from '@nestjs/schedule';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(), MongooseModule.forRoot(process.env.MongoDB_URL), 
  CurrencyRatesModule, 
  CurrencyModule, 
  DatabaseModule,
  CurrencyGatewayModule,
  ScheduleModule.forRoot()
],
  controllers: [AppController, CurrencyRatesController],
  providers: [AppService, CurrencyRates, Database, Currency],
})
export class AppModule {}
