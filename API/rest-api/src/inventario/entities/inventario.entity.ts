import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Inventario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  descripcion: string;

  @Column({ type: 'float' })
  precio: number;

  @Column({ type: 'float'  })
  stock: number;
}
