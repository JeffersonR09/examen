import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ type: 'text', unique: true })
  name: string;

  @Column({ type: 'text', unique: true })
  categoria: string;

  @Column({ type: 'text', unique: true })
  pais_origen: string;

  @Column({ type: 'numeric', default: 0, nullable: true })
  observaciones?: string;
}
