import { Module } from '@nestjs/common';
import { PurchasesService } from './purchases.service';
import { PurchasesController } from './purchases.controller';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { PurchasesEntity } from './entities/purchases.entity';

@Module({
  providers: [PurchasesService],
  controllers: [PurchasesController],
  imports: [
    MikroOrmModule.forFeature({
      entities: [PurchasesEntity],
    }),
  ],
})
export class PurchasesModule {}
