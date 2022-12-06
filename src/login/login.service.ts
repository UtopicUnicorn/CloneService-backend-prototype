import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@mikro-orm/nestjs';
import { LoginEntity } from './entities/login.entity';
import { EntityRepository } from '@mikro-orm/core';
import { CreateLoginDto } from './dto/createLoginDto';
import { usersData } from '../../mockdata/data';

export type User = any;
@Injectable()
export class LoginService {
  constructor(
    @InjectRepository(LoginEntity)
    private loginEntity: EntityRepository<LoginEntity>,
  ) {}

  async create(createLoginDto: CreateLoginDto) {
    // const newLogin = await this.loginEntity.create(createLoginDto);
    return usersData.push(createLoginDto);
    // return this.loginEntity.persistAndFlush(newLogin);
  }

  findAll() {
    return usersData;
    // return this.loginEntity.findAll();
  }

  findOne(login: string) {
    // const user = this.loginEntity.findAll();
    // return this.users.find((user) => users.login === login);
    // console.log(usersData.find((user) => user.login === login));
    // return usersData.find((user) => user.id === login);
    // return this.loginEntity.find({ login: login });
  }

  async validate(createLoginDto: CreateLoginDto) {
    // console.log('вход');
    // const user = this.findOne(createLoginDto.login);
    const user = usersData.find((user) => user.login === createLoginDto.login);
    if (user.password === createLoginDto.password) {
      return user.id;
    }
    return null;
    // if (user.password === createLoginDto.password) {
    //   return user.id;
    // }
    // return null;
  }
}
