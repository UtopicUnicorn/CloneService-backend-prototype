import { Test, TestingModule } from '@nestjs/testing';
import { PriceRulesController } from './price-rules.controller';

describe('PriceRulesController', () => {
  let controller: PriceRulesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PriceRulesController],
    }).compile();

    controller = module.get<PriceRulesController>(PriceRulesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
