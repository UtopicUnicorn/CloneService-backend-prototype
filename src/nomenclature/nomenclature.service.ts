import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@mikro-orm/nestjs';
import { NomenclatureEntity } from './entities/nomenclature.entity';
import { EntityRepository } from '@mikro-orm/core';
import { CreateNomenclatureDto } from './dto/create-nomenclature.dto';
import { UpdateNomenclatureDto } from './dto/update-nomenclature.dto';
import { CapsEntity } from './entities/caps.entity';

@Injectable()
export class NomenclatureService {
  constructor(
    @InjectRepository(NomenclatureEntity)
    private nomenclatureEntity: EntityRepository<NomenclatureEntity>, // @InjectRepository(CapsEntity) // private capsEntity: EntityRepository<CapsEntity>,
  ) {}

  async create(createNomenclatureDto: CreateNomenclatureDto, user: string) {
    createNomenclatureDto.user = user;
    const newNomenclature = await this.nomenclatureEntity.create(
      createNomenclatureDto,
    );
    return this.nomenclatureEntity.persistAndFlush(newNomenclature);
  }

  // async create(createNomenclatureDto: any, type: string) {
  //   switch (type) {
  //     case 'tires': {
  //       const newTire = await this.nomenclatureEntity.create(
  //         createNomenclatureDto,
  //       );
  //       return this.nomenclatureEntity.persistAndFlush(newTire);
  //     }
  //     case 'caps': {
  //       const newCap = await this.capsEntity.create(createNomenclatureDto);
  //       return this.nomenclatureEntity.persistAndFlush(newCap);
  //     }
  //     default: {
  //       return 'wrong type';
  //     }
  //   }
  //
  //   // const newNomenclature = await this.nomenclatureEntity.create(
  //   //   createNomenclatureDto,
  //   // );
  //   // return this.nomenclatureEntity.persistAndFlush(newNomenclature);
  // }

  findAll(user: string) {
    return this.nomenclatureEntity.find({ user: user });
  }
  findOne(id: string) {
    return this.nomenclatureEntity.findOne(id);
  }

  update(id: string, updateNomenclatureDto: UpdateNomenclatureDto) {
    return `This action updates a #${id} purchase`;
  }

  async remove(id: string) {
    const nomenclature = await this.nomenclatureEntity.findOne(id);
    return this.nomenclatureEntity.remove(nomenclature).flush();
  }
}
