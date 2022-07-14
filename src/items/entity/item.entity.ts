import {
  BaseEntity,
  Entity,
  ManyToOne, OneToOne,
  PrimaryKey,
  Property,
  TextType
} from "@mikro-orm/core";
import { nanoid } from 'nanoid';
import { PurchasesEntity } from '../../purchases/entities/purchases.entity';
import { LoginEntity } from "../../login/entities/login.entity";

@Entity({
  tableName: 'items',
})
export class ItemEntity extends BaseEntity<any, any> {
  @PrimaryKey()
  id: string = nanoid(10);

  // @Property()
  // brand: string;
  //
  // @Property()
  // model: string;
  //
  // @Property()
  // width: number;
  //
  // @Property()
  // profile: string;
  //
  // @Property()
  // diameter: number;
  //
  // @Property()
  // store: string;
  //
  // @Property()
  // amount: number;
  //
  // @Property()
  // price: number;

  @ManyToOne()
  item: PurchasesEntity;

  @Property()
  amount: number;

  @Property()
  price: number;

  @Property()
  store: string;

  @Property()
  image: string;

  @ManyToOne()
  user: LoginEntity;
}
