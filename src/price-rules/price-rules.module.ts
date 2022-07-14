import { Module } from '@nestjs/common';
import { PriceRulesService } from './price-rules.service';
import { PriceRulesController } from './price-rules.controller';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { PriceruleEntity } from './entities/pricerule.entity';

@Module({
  providers: [PriceRulesService],
  controllers: [PriceRulesController],
  imports: [
    MikroOrmModule.forFeature({
      entities: [PriceruleEntity],
    }),
  ],
})
export class PriceRulesModule {}
