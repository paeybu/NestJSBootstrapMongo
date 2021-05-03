import { Module } from '@nestjs/common';
import { FridgeitemsService } from './fridgeitems.service';
import { FridgeitemsController } from './fridgeitems.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FridgeItem } from './entities/fridgeitem.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FridgeItem])],
  controllers: [FridgeitemsController],
  providers: [FridgeitemsService],
})
export class FridgeitemsModule {}
