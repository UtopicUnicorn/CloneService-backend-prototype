import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@mikro-orm/nestjs';
import { ItemEntity } from './entity/item.entity';
import { EntityRepository } from '@mikro-orm/core';
import { CreateItemDto } from './dto/create-item.dto';
import { items } from '../../mockdata/data';

@Injectable()
export class ItemsService {
  constructor(
    @InjectRepository(ItemEntity)
    private itemEntity: EntityRepository<ItemEntity>,
  ) {}

  async create(createItemDto: CreateItemDto, image: string, user: string) {
    const id = items.length + 1;

    const newItem = {
      id: String(id),
      amount: createItemDto.amount,
      price: createItemDto.price,
      store: createItemDto.store,
      image: image,
      user: user,
    };

    return items.push(newItem);
    // console.log('im here');
    // console.log(image);
    // createItemDto.image = image;
    // createItemDto.user = user;
    // const newItem = await this.itemEntity.create(createItemDto);
    // return this.itemEntity.persistAndFlush(newItem);
  }

  findAll(user: string) {
    return items.filter((item) => item.user === user);
    // return this.itemEntity.find(
    //   { user: user },
    //   { populate: ['item.item.brand'] },
    // );
  }

  findOne(id: string) {
    return items.find((item) => item.id === id);
    // return this.itemEntity.findOne(id);
  }

  async remove(id: string) {
    const item = await this.itemEntity.findOne(id);
    return this.itemEntity.remove(item).flush();
  }
}
