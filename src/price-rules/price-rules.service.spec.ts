import { Test, TestingModule } from '@nestjs/testing';
import { PriceRulesService } from './price-rules.service';

describe('PriceRulesService', () => {
  let service: PriceRulesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PriceRulesService],
    }).compile();

    service = module.get<PriceRulesService>(PriceRulesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
