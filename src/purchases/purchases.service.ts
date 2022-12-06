import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@mikro-orm/nestjs';
import { PurchasesEntity } from './entities/purchases.entity';
import { EntityRepository } from '@mikro-orm/core';
import { CreatePurchasesDto } from './dto/create-purchases.dto';
import { UpdatePurchasesDto } from './dto/update-purchases.dto';

@Injectable()
export class PurchasesService {
  constructor(
    @InjectRepository(PurchasesEntity)
    private purchaseEntity: EntityRepository<PurchasesEntity>,
  ) {}

  async create(createPurchasesDto: CreatePurchasesDto, user: string) {
    createPurchasesDto.user = user;
    const newPurchase = await this.purchaseEntity.create(createPurchasesDto);
    return this.purchaseEntity.persistAndFlush(newPurchase);
  }

  async findAll(user: string) {
    // return await this.purchaseEntity.find(
    //   { user: user },
    //   {
    //     populate: [
    //       'partner.name',
    //       'partner.surname',
    //       'partner.parentname',
    //       'item',
    //     ],
    //   },
    // );
  }

  findOne(id: string) {
    return `This action returns a #${id} purchase`;
  }

  update(id: string, updatePurchasesDto: UpdatePurchasesDto) {
    return `This action updates a #${id} purchase`;
  }

  async remove(id: string) {
    const purchase = await this.purchaseEntity.findOne(id);
    return this.purchaseEntity.remove(purchase).flush();
  }
}
