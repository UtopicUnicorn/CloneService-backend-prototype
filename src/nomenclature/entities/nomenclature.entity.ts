import { BaseEntity, Entity, ManyToOne, OneToOne, PrimaryKey, Property } from "@mikro-orm/core";
import { nanoid } from 'nanoid';
import { LoginEntity } from "../../login/entities/login.entity";

@Entity({
  tableName: 'nomenclature',
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

  @ManyToOne()
  user: LoginEntity;
}
