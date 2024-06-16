import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Customer } from '../auth/customer/customer.entity';
import { Shop } from '../auth/shop/shop.entity';

@Entity('orders')
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Customer, (customer) => customer.orders)
  customer: Customer;

  @ManyToOne(() => Shop, (shop) => shop.orders)
  shop: Shop;

  @Column('json')
  measurements: any;

  @Column()
  order_comments: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  order_placed_date: Date;

  @Column({ type: 'timestamp', nullable: true })
  expected_delivery_date: Date;

}
