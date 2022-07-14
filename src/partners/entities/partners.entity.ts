import {
  BaseEntity,
  Entity,
  Enum,
  ManyToOne,
  OneToOne,
  PrimaryKey,
  Property,
} from '@mikro-orm/core';
import { nanoid } from 'nanoid';
import { PriceruleEntity } from '../../price-rules/entities/pricerule.entity';
import { LoginEntity } from "../../login/entities/login.entity";

export enum TypeUser {
  ip = 'ip',
  law = 'law',
  phys = 'phys',
}

@Entity({
  tableName: 'partners',
})
export class PartnersEntity extends BaseEntity<any, any> {
  @PrimaryKey()
  id: string = nanoid(10);

  @Property()
  name: string;

  @Property({
    nullable: true,
  })
  surname: string;

  @Property({
    nullable: true,
  })
  parentname: string;

  @Property({
    nullable: true,
  })
  phone: string;

  @Property({
    nullable: true,
  })
  mail: string;

  // @Property({
  //   nullable: true,
  // })
  // pricerule: string;

  @Property({
    nullable: true,
  })
  address: string;

  @Property({
    nullable: true,
  })
  inn: string;

  @Property({
    nullable: true,
  })
  bank: string;

  @Property({
    nullable: true,
  })
  paynumber: string;

  @Property({
    nullable: true,
  })
  bik: string;

  @Property({
    nullable: true,
  })
  kpp: string;

  @Property({
    nullable: true,
  })
  organization: string;

  @Property({
    nullable: true,
  })
  type: string;

  @ManyToOne()
  pricerule: PriceruleEntity;


  @ManyToOne()
  user: LoginEntity;
  // @Enum({
  //   items: () => Type,
  //   default: Type.phys,
  //   nullable: true,
  // })
  // type: TypeUser;
}
