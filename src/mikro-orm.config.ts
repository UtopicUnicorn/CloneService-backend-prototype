import { Options } from '@mikro-orm/core';
import mikroormConfig from './orm/orm/mikroorm-config';
import { PriceruleEntity } from './price-rules/entities/pricerule.entity';
import { Logger } from '@nestjs/common';
import { PurchasesEntity } from './purchases/entities/purchases.entity';
import { NomenclatureEntity } from './nomenclature/entities/nomenclature.entity';
import { DealsEntity } from './deals/entities/deals.entity';
import { LoginEntity } from './login/entities/login.entity';
import { PartnersEntity } from './partners/entities/partners.entity';
import { ItemEntity } from './items/entity/item.entity';
import { CapsEntity } from './nomenclature/entities/caps.entity';

const logger = new Logger('MikroORM');
const config = {
  ...mikroormConfig,
  entities: [
    PriceruleEntity,
    PurchasesEntity,
    NomenclatureEntity,
    DealsEntity,
    LoginEntity,
    PartnersEntity,
    ItemEntity,
  ],
  logger: logger.log.bind(logger),
} as Options;

export default config;
