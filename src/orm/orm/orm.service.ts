import { Injectable } from '@nestjs/common';
import mikroormConfig from './mikroorm-config';
import {
  MikroOrmModuleOptions,
  MikroOrmOptionsFactory,
} from '@mikro-orm/nestjs';

@Injectable()
export class OrmService implements MikroOrmOptionsFactory {
  createMikroOrmOptions(): MikroOrmModuleOptions {
    return { ...mikroormConfig, autoLoadEntities: true };
  }
}
