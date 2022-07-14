import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@mikro-orm/nestjs';
import { ItemEntity } from './entity/item.entity';
import { EntityRepository } from '@mikro-orm/core';
import { CreateItemDto } from './dto/create-item.dto';

@Injectable()
export class ItemsService {
  constructor(
    @InjectRepository(ItemEntity)
    private itemEntity: EntityRepository<ItemEntity>,
  ) {}

  async create(createItemDto: CreateItemDto, image: string, user: string) {
    console.log('im here');
    console.log(image);
    createItemDto.image = image;
    createItemDto.user = user;
    const newItem = await this.itemEntity.create(createItemDto);
    return this.itemEntity.persistAndFlush(newItem);
  }

  findAll(user: string) {
    return this.itemEntity.find(
      { user: user },
      { populate: ['item.item.brand'] },
    );
  }

  findOne(id: string) {
    return this.itemEntity.findOne(id);
  }

  async remove(id: string) {
    const item = await this.itemEntity.findOne(id);
    return this.itemEntity.remove(item).flush();
  }
}
