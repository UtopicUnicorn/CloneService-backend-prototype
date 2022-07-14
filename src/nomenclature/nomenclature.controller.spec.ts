import { Test, TestingModule } from '@nestjs/testing';
import { NomenclatureController } from './nomenclature.controller';

describe('NomenclatureController', () => {
  let controller: NomenclatureController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NomenclatureController],
    }).compile();

    controller = module.get<NomenclatureController>(NomenclatureController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
