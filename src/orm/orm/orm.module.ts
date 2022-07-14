import { Module } from '@nestjs/common';
import { OrmService } from './orm.service';
import { MikroOrmModule } from '@mikro-orm/nestjs';

@Module({
  imports: [
    MikroOrmModule.forRootAsync({
      useClass: OrmService,
    }),
  ],
  providers: [OrmService],
})
export class OrmModule {}
