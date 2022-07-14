import { BaseEntity, Entity, PrimaryKey, Property } from '@mikro-orm/core';
import { nanoid } from 'nanoid';

@Entity({
  tableName: 'users',
})
export class LoginEntity extends BaseEntity<any, any> {
  @PrimaryKey()
  id: string = nanoid(10);

  @Property()
  login: string;

  @Property()
  password: string;

}
