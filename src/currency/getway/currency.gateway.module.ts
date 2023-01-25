import { Module } from '@nestjs/common';
import { CurrencyModule } from '../currency.module';
import { CurrencyGateway } from './currency.gateway';

@Module({
    imports: [CurrencyModule],
    providers: [CurrencyGateway]
})

export class CurrencyGatewayModule {}