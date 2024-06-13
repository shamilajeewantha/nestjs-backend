// src/shops/shop.entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('shop')
export class Shop {
  @PrimaryGeneratedColumn()
  shop_id: number;

  @Column()
  shop_name: string;

  @Column()
  address: string;

  @Column()
  phone: string;

  @Column()
  email: string;

  @Column()
  password: string;
}
