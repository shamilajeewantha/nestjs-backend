// src/shops/shop.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Order } from '../../order/order.entity';

@Entity('shop')
export class Shop {
  @PrimaryGeneratedColumn()
  id: number;

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

  @OneToMany(() => Order, (order) => order.shop)
  orders: Order[];
}
