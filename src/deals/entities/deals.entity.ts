import {
  BaseEntity,
  Entity,
  ManyToOne, OneToOne,
  PrimaryKey,
  Property
} from "@mikro-orm/core";
import { nanoid } from 'nanoid';
import { PartnersEntity } from '../../partners/entities/partners.entity';
import { NomenclatureEntity } from '../../nomenclature/entities/nomenclature.entity';
import { LoginEntity } from "../../login/entities/login.entity";

@Entity({
  tableName: 'deals',
})
export class DealsEntity extends BaseEntity<any, any> {
  @PrimaryKey()
  id: string = nanoid(10);

  @Property()
  number: string;

  @Property()
  price: number;

  @Property()
  partner: string;

  @ManyToOne()
  item: NomenclatureEntity;

  @Property()
  amount: number;

  @Property()
  state: string;
  // @Property()
  // organization: string;
  //
  // @Property()
  // manager: string;
  //
  // @Property()
  // interval: string;

  @Property()
  date: string = new Date().toLocaleDateString();

  @ManyToOne()
  user: LoginEntity;
}
