// src/orders/order.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Customer } from '../auth/customer/customer.entity';
import { Shop } from '../auth/shop/shop.entity';

@Entity('orders')
export class Order {
  @PrimaryGeneratedColumn()
  order_id: number;

  @ManyToOne(() => Customer, customer => customer.customer_id)
  customer_id: Customer;

  @ManyToOne(() => Shop, shop => shop.shop_id)
  shop_id: Shop;

  @Column('json')
  measurements: any;

  @Column()
  comments: string;
}
