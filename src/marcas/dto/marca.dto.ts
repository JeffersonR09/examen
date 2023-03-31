import { IsString } from 'class-validator';
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  MinLength,
} from 'class-validator/types/decorator/decorators';

export class CreateMarcaDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  name: string;

  @IsString()
  @IsNotEmpty()
  categoria: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  pais_origen: string;

  @IsString()
  @IsOptional()
  observaciones: string;
}
