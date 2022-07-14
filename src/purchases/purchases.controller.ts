import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { PurchasesService } from './purchases.service';
import { CreatePurchasesDto } from './dto/create-purchases.dto';
import { UpdatePurchasesDto } from './dto/update-purchases.dto';

@Controller('purchases')
export class PurchasesController {
  constructor(private readonly purchasesService: PurchasesService) {}

  @Post(':user')
  create(@Param('user') user: string, @Body() createPurchasesDto: CreatePurchasesDto) {
    return this.purchasesService.create(createPurchasesDto, user);
  }

  @Get(':user')
  findAll(@Param('user') user: string) {
    return this.purchasesService.findAll(user);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.purchasesService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePurchasesDto: UpdatePurchasesDto,
  ) {
    return this.purchasesService.update(id, updatePurchasesDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.purchasesService.remove(id);
  }
}
