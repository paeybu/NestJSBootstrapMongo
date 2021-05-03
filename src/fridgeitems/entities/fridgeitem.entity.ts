import { Entity, Column, ObjectIdColumn } from 'typeorm';

@Entity()
export class FridgeItem {
  @ObjectIdColumn()
  id: number;

  @Column({ length: 30 })
  name: string;

  @Column({ length: 255 })
  expire_date: Date;
}
