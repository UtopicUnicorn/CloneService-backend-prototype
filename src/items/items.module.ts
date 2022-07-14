import { Module } from '@nestjs/common';
import { ItemsController } from './items.controller';
import { ItemsService } from './items.service';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { ItemEntity } from './entity/item.entity';

@Module({
  controllers: [ItemsController],
  providers: [ItemsService],
  imports: [
    MikroOrmModule.forFeature({
      entities: [ItemEntity],
    }),
  ],
})
export class ItemsModule {}
