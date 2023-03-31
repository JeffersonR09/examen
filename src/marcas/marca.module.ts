import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Marca } from './entities/marca.entitys';

@Module({
  imports: [TypeOrmModule.forFeature([Marca])],
  controllers: [],
  providers: [],
})
export class MarcaModule {}
