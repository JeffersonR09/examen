import { IsString } from 'class-validator';
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  MinLength,
} from 'class-validator/types/decorator/decorators';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(10)
  nombre: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  description: string;

  @IsNumber()
  @IsNotEmpty()
  precio: number;

  @IsNumber()
  @IsNotEmpty()
  stock: number;
}
