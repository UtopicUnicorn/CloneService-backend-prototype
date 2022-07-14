import { MikroOrmModuleOptions } from '@mikro-orm/nestjs';

const mikroormConfig: MikroOrmModuleOptions = {
  type: 'postgresql',
  host: 'localhost',
  port: 5432,
  user: 'postgres',
  password: 'postgres',
  dbName: 'clone-service',
  // entities: ['dist/**/*.entities'],
  // entitiesTs: ['src/**/*.entities'],
};

export default mikroormConfig;
