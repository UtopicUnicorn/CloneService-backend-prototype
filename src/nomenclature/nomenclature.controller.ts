import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { NomenclatureService } from './nomenclature.service';
import { CreateNomenclatureDto } from './dto/create-nomenclature.dto';
import { UpdateNomenclatureDto } from './dto/update-nomenclature.dto';

@Controller('nomenclature')
export class NomenclatureController {
  constructor(private readonly nomenclatureService: NomenclatureService) {}

  @Post(':user')
  create(
    @Param('user') user: string,
    @Body() createNomenclatureDto: CreateNomenclatureDto,
  ) {
    return this.nomenclatureService.create(createNomenclatureDto, user);
  }

  // @Post()
  // create(@Body() data: any) {
  //   console.log(data);
  //   switch (data.type) {
  //     case 'tires': {
  //       return this.nomenclatureService.create(data, 'tires');
  //     }
  //     case 'caps': {
  //       return this.nomenclatureService.create(data, 'caps');
  //     }
  //   }
  // }

  @Get(':user')
  findAll(@Param('user') user: string) {
    return this.nomenclatureService.findAll(user);
  }

  @Get('find/:id')
  findOne(@Param('id') id: string) {
    console.log(id);
    return this.nomenclatureService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateNomenclatureDto: UpdateNomenclatureDto,
  ) {
    return this.nomenclatureService.update(id, updateNomenclatureDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.nomenclatureService.remove(id);
  }
}
