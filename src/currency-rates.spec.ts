import { Test, TestingModule } from '@nestjs/testing';
import { CurrencyRates } from './currency-rates';

describe('CurrencyRates', () => {
  let provider: CurrencyRates;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CurrencyRates],
    }).compile();

    provider = module.get<CurrencyRates>(CurrencyRates);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
