import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PriceRulesModule } from './price-rules/price-rules.module';
import { OrmModule } from './orm/orm/orm.module';
import { PurchasesModule } from './purchases/purchases.module';
import { NomenclatureModule } from './nomenclature/nomenclature.module';
import { DealsModule } from './deals/deals.module';
import { LoginModule } from './login/login.module';
import { PartnersModule } from './partners/partners.module';
import { ItemsModule } from './items/items.module';

@Module({
  imports: [
    PriceRulesModule,
    OrmModule,
    PurchasesModule,
    NomenclatureModule,
    DealsModule,
    LoginModule,
    PartnersModule,
    ItemsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
