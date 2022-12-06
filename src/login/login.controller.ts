import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { LoginService } from './login.service';
import { CreateLoginDto } from './dto/createLoginDto';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post()
  create(@Body() createLoginDto: CreateLoginDto) {
    return this.loginService.create(createLoginDto);
  }

  @Get()
  findAll() {
    return this.loginService.findAll();
  }

  @Post('/check')
  findOne(@Body() createLoginDto: CreateLoginDto) {
    return this.loginService.validate(createLoginDto);
  }
}
