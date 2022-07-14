import { Test, TestingModule } from '@nestjs/testing';
import { NomenclatureService } from './nomenclature.service';

describe('NomenclatureService', () => {
  let service: NomenclatureService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NomenclatureService],
    }).compile();

    service = module.get<NomenclatureService>(NomenclatureService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
