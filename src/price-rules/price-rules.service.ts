import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@mikro-orm/nestjs';
import { PriceruleEntity } from './entities/pricerule.entity';
import { EntityRepository } from '@mikro-orm/core';
import { CreatePriceRulesDto } from './dto/create-pricerules.dto';
import { UpdatePriceRulesDto } from './dto/update-pricerules.dto';

@Injectable()
export class PriceRulesService {
  constructor(
    @InjectRepository(PriceruleEntity)
    private priceEntity: EntityRepository<PriceruleEntity>,
  ) {}

  async create(createPriceRulesDto: CreatePriceRulesDto, user: string) {
    createPriceRulesDto.user = user;
    const newRule = await this.priceEntity.create(createPriceRulesDto);
    return this.priceEntity.persistAndFlush(newRule);
  }

  findAll(user: string) {
    return this.priceEntity.find({ user: user });
  }

  findOne(id: string) {
    return this.priceEntity.findOne(id);
  }

  async update(id: string, updatePriceRulesDto: UpdatePriceRulesDto) {
    const rule = await this.priceEntity.find(id);
    return this.priceEntity.nativeUpdate(rule, updatePriceRulesDto);
  }

  async remove(id: string) {
    const rule = await this.priceEntity.findOne(id);
    return this.priceEntity.remove(rule).flush();
  }
}
