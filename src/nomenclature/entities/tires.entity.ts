import { BaseEntity, Entity, PrimaryKey, Property } from '@mikro-orm/core';
import { nanoid } from 'nanoid';

@Entity({
  tableName: 'tires',
})
export class NomenclatureEntity extends BaseEntity<any, any> {
  @PrimaryKey()
  id: string = nanoid(10);

  @Property()
  brand: string;

  @Property()
  model: string;

  @Property()
  width: number;

  @Property()
  profile: number;

  @Property()
  diameter: number;

  @Property()
  index: string;

  @Property()
  year: number;

  @Property()
  description: string;

  @Property()
  type: string;

  @Property()
  season: string;

  @Property()
  status: string;
}
