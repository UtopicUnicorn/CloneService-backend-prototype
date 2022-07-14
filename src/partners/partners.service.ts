import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@mikro-orm/nestjs';
import { PartnersEntity } from './entities/partners.entity';
import { EntityRepository } from '@mikro-orm/core';
import { CreatePartnerDto } from './dto/create-partner.dto';
import { UpdatePartnerDto } from './dto/update-partner.dto';

@Injectable()
export class PartnersService {
  constructor(
    @InjectRepository(PartnersEntity)
    private partnersEntity: EntityRepository<PartnersEntity>,
  ) {}

  async create(createPartnerDto: CreatePartnerDto, user: string) {
    createPartnerDto.user = user;
    const newPartner = await this.partnersEntity.create(createPartnerDto);
    return this.partnersEntity.persistAndFlush(newPartner);
  }

  async findAll(user: string) {
    // return await this.partnersEntity.findAll({
    //   populate: [
    //     'pricerule.name',
    //     'pricerule.percent',
    //     'pricerule.min',
    //     'pricerule.max',
    //   ],
    // });
    return await this.partnersEntity.find(
      { user: user },
      {
        populate: [
          'pricerule.name',
          'pricerule.percent',
          'pricerule.min',
          'pricerule.max',
        ],
      },
    );
  }

  findOne(id: string) {
    return this.partnersEntity.findOne(id, { populate: ['pricerule.percent'] });
  }

  async update(id: string, updatePartnerDto: UpdatePartnerDto) {
    const partner = await this.partnersEntity.find(id);
    return this.partnersEntity.nativeUpdate(partner, updatePartnerDto);
  }

  async remove(id: string) {
    const partner = await this.partnersEntity.findOne(id);
    return this.partnersEntity.remove(partner).flush();
  }
}
