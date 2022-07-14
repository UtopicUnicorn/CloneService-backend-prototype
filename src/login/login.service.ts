import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@mikro-orm/nestjs';
import { LoginEntity } from './entities/login.entity';
import { EntityRepository } from '@mikro-orm/core';
import { CreateLoginDto } from './dto/createLoginDto';

export type User = any;
@Injectable()
export class LoginService {
  constructor(
    @InjectRepository(LoginEntity)
    private loginEntity: EntityRepository<LoginEntity>,
  ) {}

  async create(createLoginDto: CreateLoginDto) {
    const newLogin = await this.loginEntity.create(createLoginDto);
    return this.loginEntity.persistAndFlush(newLogin);
  }

  findAll() {
    return this.loginEntity.findAll();
  }

  async findOne(login: string): Promise<User | undefined> {
    // const user = this.loginEntity.findAll();
    // return this.users.find((user) => users.login === login);
    return this.loginEntity.find({ login: login });
  }

  async validate(createLoginDto: CreateLoginDto): Promise<any> {
    const user = await this.findOne(createLoginDto.login);
    if (user[0].password === createLoginDto.password) {
      return user[0].id;
    }
    return null;
  }
}
