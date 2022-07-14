import { BaseEntity, Entity, ManyToOne, OneToOne, PrimaryKey, Property } from "@mikro-orm/core";
import { nanoid } from 'nanoid';
import { LoginEntity } from "../../login/entities/login.entity";

@Entity({
  tableName: 'pricerules',
})
export class PriceruleEntity extends BaseEntity<any, any> {
  @PrimaryKey()
  id: string = nanoid(10);

  @Property()
  name: string;

  @Property()
  percent: number;

  @Property()
  min: number;

  @Property()
  max: number;

  @ManyToOne()
  user: LoginEntity;
}
