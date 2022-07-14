import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { DealsService } from './deals.service';
import { CreateDealsDto } from './dto/create-deals.dto';
import { UpdateDealsDto } from './dto/update-deals.dto';

@Controller('deals')
export class DealsController {
  constructor(private readonly dealsService: DealsService) {}

  @Post(':user')
  create(@Param('user') user: string, @Body() createDealsDto: CreateDealsDto) {
    return this.dealsService.create(createDealsDto, user);
  }

  @Get(':user')
  findall(@Param('user') user: string) {
    return this.dealsService.findAll(user);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dealsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDealsDto: UpdateDealsDto) {
    return this.dealsService.update(id, updateDealsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dealsService.remove(id);
  }
}
