import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('orders')
export class Order {
  @PrimaryGeneratedColumn()
  order_id: number;

  @Column()
  customer_id: number; 

  @Column()
  shop_id: number; 

  @Column('json')
  measurements: any;

  @Column()
  comments: string;
}
