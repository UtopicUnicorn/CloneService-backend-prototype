import { Migration } from '@mikro-orm/migrations';

export class Migration20220618142950 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "users" ("id" varchar(255) not null, "login" varchar(255) not null, "password" varchar(255) not null);');
    this.addSql('alter table "users" add constraint "users_pkey" primary key ("id");');

    this.addSql('create table "nomenclature" ("id" varchar(255) not null, "brand" varchar(255) not null, "model" varchar(255) not null, "width" int not null, "profile" int not null, "diameter" int not null, "index" varchar(255) not null, "year" int not null, "description" varchar(255) not null, "type" varchar(255) not null, "season" varchar(255) not null, "status" varchar(255) not null, "user_id" varchar(255) not null);');
    this.addSql('alter table "nomenclature" add constraint "nomenclature_pkey" primary key ("id");');

    this.addSql('create table "deals" ("id" varchar(255) not null, "number" varchar(255) not null, "price" int not null, "partner" varchar(255) not null, "item_id" varchar(255) not null, "amount" int not null, "state" varchar(255) not null, "date" varchar(255) not null, "user_id" varchar(255) not null);');
    this.addSql('alter table "deals" add constraint "deals_pkey" primary key ("id");');

    this.addSql('create table "pricerules" ("id" varchar(255) not null, "name" varchar(255) not null, "percent" int not null, "min" int not null, "max" int not null, "user_id" varchar(255) not null);');
    this.addSql('alter table "pricerules" add constraint "pricerules_pkey" primary key ("id");');

    this.addSql('create table "partners" ("id" varchar(255) not null, "name" varchar(255) not null, "surname" varchar(255) null, "parentname" varchar(255) null, "phone" varchar(255) null, "mail" varchar(255) null, "address" varchar(255) null, "inn" varchar(255) null, "bank" varchar(255) null, "paynumber" varchar(255) null, "bik" varchar(255) null, "kpp" varchar(255) null, "organization" varchar(255) null, "type" varchar(255) null, "pricerule_id" varchar(255) not null, "user_id" varchar(255) not null);');
    this.addSql('alter table "partners" add constraint "partners_pkey" primary key ("id");');

    this.addSql('create table "purchases" ("id" varchar(255) not null, "organization" varchar(255) not null, "supplier" varchar(255) not null, "stock" varchar(255) not null, "sum" int not null, "partner_id" varchar(255) not null, "item_id" varchar(255) not null, "document" varchar(255) not null, "addinvest" int not null, "date" varchar(255) not null, "user_id" varchar(255) not null);');
    this.addSql('alter table "purchases" add constraint "purchases_pkey" primary key ("id");');

    this.addSql('create table "items" ("id" varchar(255) not null, "item_id" varchar(255) not null, "amount" int not null, "price" int not null, "store" varchar(255) not null, "image" varchar(255) not null, "user_id" varchar(255) not null);');
    this.addSql('alter table "items" add constraint "items_pkey" primary key ("id");');

    this.addSql('alter table "nomenclature" add constraint "nomenclature_user_id_foreign" foreign key ("user_id") references "users" ("id") on update cascade;');

    this.addSql('alter table "deals" add constraint "deals_item_id_foreign" foreign key ("item_id") references "nomenclature" ("id") on update cascade;');
    this.addSql('alter table "deals" add constraint "deals_user_id_foreign" foreign key ("user_id") references "users" ("id") on update cascade;');

    this.addSql('alter table "pricerules" add constraint "pricerules_user_id_foreign" foreign key ("user_id") references "users" ("id") on update cascade;');

    this.addSql('alter table "partners" add constraint "partners_pricerule_id_foreign" foreign key ("pricerule_id") references "pricerules" ("id") on update cascade;');
    this.addSql('alter table "partners" add constraint "partners_user_id_foreign" foreign key ("user_id") references "users" ("id") on update cascade;');

    this.addSql('alter table "purchases" add constraint "purchases_partner_id_foreign" foreign key ("partner_id") references "partners" ("id") on update cascade;');
    this.addSql('alter table "purchases" add constraint "purchases_item_id_foreign" foreign key ("item_id") references "nomenclature" ("id") on update cascade;');
    this.addSql('alter table "purchases" add constraint "purchases_user_id_foreign" foreign key ("user_id") references "users" ("id") on update cascade;');

    this.addSql('alter table "items" add constraint "items_item_id_foreign" foreign key ("item_id") references "purchases" ("id") on update cascade;');
    this.addSql('alter table "items" add constraint "items_user_id_foreign" foreign key ("user_id") references "users" ("id") on update cascade;');
  }

}
