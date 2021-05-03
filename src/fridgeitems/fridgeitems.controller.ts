import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FridgeitemsService } from './fridgeitems.service';
import { CreateFridgeitemDto } from './dto/create-fridgeitem.dto';
import { UpdateFridgeitemDto } from './dto/update-fridgeitem.dto';

@Controller('fridgeitems')
export class FridgeitemsController {
  constructor(private readonly fridgeitemsService: FridgeitemsService) {}

  @Post()
  create(@Body() createFridgeitemDto: CreateFridgeitemDto) {
    return this.fridgeitemsService.create(createFridgeitemDto);
  }

  @Get()
  findAll() {
    return this.fridgeitemsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fridgeitemsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateFridgeitemDto: UpdateFridgeitemDto,
  ) {
    return this.fridgeitemsService.update(id, updateFridgeitemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fridgeitemsService.remove(id);
  }
}
