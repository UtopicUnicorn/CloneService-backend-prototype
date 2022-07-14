import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { ItemsService } from './items.service';
import { CreateItemDto } from './dto/create-item.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { v4 as uuidv4 } from 'uuid';
import path = require('path');
import { Observable, of } from 'rxjs';
import { join } from 'path';
export const storage = {
  storage: diskStorage({
    destination: './uploads',
    filename: (req, file, cb) => {
      const filename: string =
        path.parse(file.originalname).name.replace(/\s/g, '') + uuidv4();
      console.log(filename);
      const extension: string = path.parse(file.originalname).ext;
      console.log(extension);
      cb(null, `${filename}${extension}`);
    },
  }),
};

@Controller('items')
export class ItemsController {
  constructor(private readonly itemService: ItemsService) {}

  @Post(':user')
  @UseInterceptors(FileInterceptor('file', storage))
  create(
    @Param('user') user: string,
    @UploadedFile() file,
    @Body() createItemDto: CreateItemDto,
  ) {
    // return this.itemService.create(createItemDto);
    console.log(file.filename);
    return this.itemService.create(createItemDto, file.filename, user);
  }

  @Get(':user')
  findAll(@Param('user') user: string) {
    return this.itemService.findAll(user);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.itemService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.itemService.remove(id);
  }

  @Get('image/:imagename')
  findImage(@Param('imagename') imagename, @Res() res): Observable<any> {
    console.log('here');
    return of(res.sendFile(join(process.cwd(), 'uploads/' + imagename)));
  }
}
