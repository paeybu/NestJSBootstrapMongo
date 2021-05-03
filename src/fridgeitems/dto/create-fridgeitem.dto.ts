import { IsDateString, IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateFridgeitemDto {
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  expire_date: string;
}
