import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { PartnersService } from './partners.service';
import { CreatePartnerDto } from './dto/create-partner.dto';
import { UpdatePartnerDto } from './dto/update-partner.dto';

@Controller('partners')
export class PartnersController {
  constructor(private readonly partnersService: PartnersService) {}

  @Post(':user')
  create(@Param('user') user: string, @Body() createPartnerDto: CreatePartnerDto) {
    return this.partnersService.create(createPartnerDto, user);
  }

  @Get(':user')
  findall(@Param('user') user: string) {
    return this.partnersService.findAll(user);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.partnersService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePartnersDto: UpdatePartnerDto) {
    return this.partnersService.update(id, updatePartnersDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.partnersService.remove(id);
  }
}
