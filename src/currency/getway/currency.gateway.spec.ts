import { Test, TestingModule } from '@nestjs/testing';
import { CurrencyGateway } from './currency.gateway';
import { CurrencyService } from '../currency.service';

describe('CurrencyGateway', () => {
  let gateway: CurrencyGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CurrencyGateway, CurrencyService],
    }).compile();

    gateway = module.get<CurrencyGateway>(CurrencyGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
