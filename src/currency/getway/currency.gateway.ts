import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { CurrencyService } from '../currency.service';
import { Server } from 'socket.io';
import { OnModuleInit } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';

@WebSocketGateway()
export class CurrencyGateway implements OnModuleInit {
  @WebSocketServer()
  server: Server;

  onModuleInit() {
    this.server.on('connection', (socket) => {
      console.log(socket.id);
    });
  }

  constructor(private readonly currencyService: CurrencyService) {}
  // @SubscribeMessage('createCurrency')
  // create(@MessageBody() createCurrencyDto: CreateCurrencyDto) {
  //   return this.currencyService.create(createCurrencyDto);
  // }

  @Cron('0 */1 * * * *')
  async handleCron() {
    const result = await this.currencyService.findRates();
    this.server.emit('onMessage', {
      message: 'new rates',
      data: result,
    });
  }
}
