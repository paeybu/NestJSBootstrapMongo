import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFridgeitemDto } from './dto/create-fridgeitem.dto';
import { UpdateFridgeitemDto } from './dto/update-fridgeitem.dto';
import { FridgeItem } from './entities/fridgeitem.entity';
import dayjs from 'dayjs';

@Injectable()
export class FridgeitemsService {
  constructor(
    @InjectRepository(FridgeItem)
    private fridgeItemRepo: Repository<FridgeItem>,
  ) {}

  async create(createFridgeitemDto: CreateFridgeitemDto) {
    const { expire_date } = createFridgeitemDto;
    const expDate = dayjs(expire_date, 'DD/MM/YY').add(7, 'h').toDate();
    return await this.fridgeItemRepo.save({
      ...createFridgeitemDto,
      expire_date: expDate,
    });
  }

  async findAll() {
    return await this.fridgeItemRepo.find();
  }

  async findOne(id: string) {
    return await this.fridgeItemRepo.findOne(id);
  }

  async update(id: string, updateFridgeitemDto: UpdateFridgeitemDto) {
    await this.fridgeItemRepo.update(id, updateFridgeitemDto);
    return await this.fridgeItemRepo.findOne(id);
  }

  async remove(id: string) {
    return await this.fridgeItemRepo.delete(id);
  }
}
