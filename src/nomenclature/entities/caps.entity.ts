import { BaseEntity, Entity, PrimaryKey, Property } from '@mikro-orm/core';
import { nanoid } from 'nanoid';

@Entity({
  tableName: 'caps',
})
export class CapsEntity extends BaseEntity<any, any> {
  @PrimaryKey()
  id: string = nanoid(10);

  @Property()
  brand: string;

  @Property()
  model: string;

  @Property()
  diameter: number;

  @Property()
  color: string;

  @Property()
  application: string;

  @Property()
  type: string;
}
