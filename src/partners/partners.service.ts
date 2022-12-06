import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@mikro-orm/nestjs';
import { PartnersEntity } from './entities/partners.entity';
import { EntityRepository } from '@mikro-orm/core';
import { CreatePartnerDto } from './dto/create-partner.dto';
import { UpdatePartnerDto } from './dto/update-partner.dto';
import { partners } from '../../mockdata/data';

@Injectable()
export class PartnersService {
  constructor(
    @InjectRepository(PartnersEntity)
    private partnersEntity: EntityRepository<PartnersEntity>,
  ) {}

  async create(createPartnerDto: CreatePartnerDto, user: string) {
    const id = partners.length + 1;
    const partner = {
      id: String(id),
      name: 'Медведев',
      surname: 'Тимофей',
      parentname: 'Сергеевич',
      phone: '89964273179',
      mail: null,
      address: '',
      inn: '',
      bank: '',
      paynumber: null,
      bik: '',
      kpp: '',
      organization: null,
      type: '',
      pricerule: '1',
      user: user,
    };
    partners.push(partner);
    // createPartnerDto.user = user;
    // const newPartner = await this.partnersEntity.create(createPartnerDto);
    // return this.partnersEntity.persistAndFlush(newPartner);
  }

  async findAll(user: string) {
    return partners.filter((partner) => partner.user === user);
    // return await this.partnersEntity.findAll({
    //   populate: [
    //     'pricerule.name',
    //     'pricerule.percent',
    //     'pricerule.min',
    //     'pricerule.max',
    //   ],
    // });
    // return await this.partnersEntity.find(
    //   { user: user },
    //   {
    //     populate: [
    //       'pricerule.name',
    //       'pricerule.percent',
    //       'pricerule.min',
    //       'pricerule.max',
    //     ],
    //   },
    // );
  }

  findOne(id: string) {
    return partners.find((partner) => partner.id === id);
    // return this.partnersEntity.findOne(id, { populate: ['pricerule.percent'] });
  }

  async update(id: string, updatePartnerDto: UpdatePartnerDto) {
    // const partner = await this.partnersEntity.find(id);
    // return this.partnersEntity.nativeUpdate(partner, updatePartnerDto);
  }

  async remove(id: string) {
    // const partner = await this.partnersEntity.findOne(id);
    // return this.partnersEntity.remove(partner).flush();
  }
}
