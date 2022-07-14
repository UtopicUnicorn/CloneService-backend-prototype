import { Module } from '@nestjs/common';
import { DealsService } from './deals.service';
import { DealsController } from './deals.controller';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { DealsEntity } from './entities/deals.entity';

@Module({
  providers: [DealsService],
  controllers: [DealsController],
  imports: [
    MikroOrmModule.forFeature({
      entities: [DealsEntity],
    }),
  ],
})
export class DealsModule {}
