import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Order } from '../../order/order.entity';

@Entity('customer')
export class Customer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  phone_number: string;

  @OneToMany(() => Order, (order) => order.customer)
  orders: Order[];
}
