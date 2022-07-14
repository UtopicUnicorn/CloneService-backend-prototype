import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@mikro-orm/nestjs';
import { DealsEntity } from './entities/deals.entity';
import { EntityRepository } from '@mikro-orm/core';
import { CreateDealsDto } from './dto/create-deals.dto';
import { UpdateDealsDto } from './dto/update-deals.dto';

@Injectable()
export class DealsService {
  constructor(
    @InjectRepository(DealsEntity)
    private dealsEntity: EntityRepository<DealsEntity>,
  ) {}

  async create(createDealsDto: CreateDealsDto, user: string) {
    createDealsDto.user = user;
    const newDeal = await this.dealsEntity.create(createDealsDto);
    return this.dealsEntity.persistAndFlush(newDeal);
  }

  findAll(user: string) {
    return this.dealsEntity.find({ user: user });
  }
  findOne(id: string) {
    return `This action returns a #${id} purchase`;
  }

  update(id: string, updateDealslatureDto: UpdateDealsDto) {
    return `This action updates a #${id} purchase`;
  }

  async remove(id: string) {
    const deal = await this.dealsEntity.findOne(id);
    return this.dealsEntity.remove(deal).flush();
  }
}
