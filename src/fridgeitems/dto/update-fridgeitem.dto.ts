import { PartialType } from '@nestjs/mapped-types';
import { CreateFridgeitemDto } from './create-fridgeitem.dto';

export class UpdateFridgeitemDto extends PartialType(CreateFridgeitemDto) {}
