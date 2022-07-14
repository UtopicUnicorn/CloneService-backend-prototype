import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { PriceRulesService } from './price-rules.service';
import { CreatePriceRulesDto } from './dto/create-pricerules.dto';
import { UpdatePriceRulesDto } from './dto/update-pricerules.dto';

@Controller('price-rules')
export class PriceRulesController {
  constructor(private readonly priceRulesService: PriceRulesService) {}

  @Post(':user')
  create(
    @Param('user') user: string,
    @Body() createPriceRulesDto: CreatePriceRulesDto,
  ) {
    return this.priceRulesService.create(createPriceRulesDto, user);
  }

  @Get(':user')
  findAll(@Param('user') user: string) {
    return this.priceRulesService.findAll(user);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.priceRulesService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePriceRulesDto: UpdatePriceRulesDto,
  ) {
    return this.priceRulesService.update(id, updatePriceRulesDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.priceRulesService.remove(id);
  }
}
