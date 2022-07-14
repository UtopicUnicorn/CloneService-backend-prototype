import { Module } from '@nestjs/common';
import { PartnersController } from './partners.controller';
import { PartnersService } from './partners.service';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { PartnersEntity } from './entities/partners.entity';

@Module({
  controllers: [PartnersController],
  providers: [PartnersService],
  imports: [
    MikroOrmModule.forFeature({
      entities: [PartnersEntity],
    }),
  ],
})
export class PartnersModule {}
