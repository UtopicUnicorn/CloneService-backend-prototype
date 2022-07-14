import { Module } from '@nestjs/common';
import { NomenclatureController } from './nomenclature.controller';
import { NomenclatureService } from './nomenclature.service';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { NomenclatureEntity } from './entities/nomenclature.entity';

@Module({
  controllers: [NomenclatureController],
  providers: [NomenclatureService],
  imports: [
    MikroOrmModule.forFeature({
      entities: [NomenclatureEntity],
    }),
  ],
})
export class NomenclatureModule {}
