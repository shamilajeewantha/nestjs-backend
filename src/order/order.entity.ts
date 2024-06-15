import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Customer } from '../auth/customer/customer.entity';

@Entity('orders')
export class Order {
  @PrimaryGeneratedColumn()
  order_id: number;

  @ManyToOne(() => Customer, (customer) => customer.orders)
  customer_id: Customer; 

  @Column()
  shop_id: number; 

  @Column('json')
  measurements: any;

  @Column()
  comments: string;
}
