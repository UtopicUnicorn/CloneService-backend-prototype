import { BaseEntity, Entity, ManyToMany, ManyToOne, OneToOne, PrimaryKey, Property } from "@mikro-orm/core";
import { nanoid } from 'nanoid';
import { PartnersEntity } from "../../partners/entities/partners.entity";
import { NomenclatureEntity } from "../../nomenclature/entities/nomenclature.entity";
import { LoginEntity } from "../../login/entities/login.entity";

@Entity({
  tableName: 'purchases',
})
export class PurchasesEntity extends BaseEntity<any, any> {
  @PrimaryKey()
  id: string = nanoid(10);

  @Property()
  organization: string;

  @Property()
  supplier: string;

  @Property()
  stock: string;

  // @Property()
  // interval: string;

  @Property()
  sum: number;

  @ManyToOne()
  partner: PartnersEntity;

  @ManyToOne()
  item: NomenclatureEntity;

  @Property()
  document: string;

  @Property()
  addinvest: number;

  @Property()
  date: string = new Date().toLocaleDateString();

  @ManyToOne()
  user: LoginEntity;
}
