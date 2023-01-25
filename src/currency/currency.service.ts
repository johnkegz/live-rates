import { HttpService } from '@nestjs/axios';
import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { lastValueFrom, map, Observable } from 'rxjs';
import { Currency } from './interfaces/currency.interface';

@Injectable()
export class CurrencyService {
  constructor(
    @Inject('CURRENCY_MODEL')
    private currencyModel: Model<Currency>,
    private readonly httpService: HttpService
  ) { }

  async findRates() {
    try{
      const res = await lastValueFrom(this.httpService.get('http://api.coinlayer.com/live?access_key=1602940a716dbbd3c9f52ae7cef3636f').pipe(map(res => res.data)))
      const createdRates = new this.currencyModel(res);
      createdRates.save();
      return res;
    }catch(e){
      return e
    }
  }
}
