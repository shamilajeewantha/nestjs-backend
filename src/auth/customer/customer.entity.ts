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


/* 

INSERT INTO customer (first_name, last_name, email, "password", phone_number)
VALUES
('Michael', 'Smith', 'msmith@email.com', '5', '1234567890'),
('Jennifer', 'Johnson', 'jjohnson@email.com', '5', '9876543210'),
('Christopher', 'Williams', 'cwilliams@email.com', '5', '5551234567'),
('Jessica', 'Jones', 'jjones@email.com', '5', '1112223333'),
('Matthew', 'Brown', 'mbrown@email.com', '5', '9998887777'),
('Amanda', 'Davis', 'adavis@email.com', '5', '4445556666'),
('Sarah', 'Martinez', 'smartinez@email.com', '5', '3334445555'),
('Daniel', 'Miller', 'dmiller@email.com', '5', '2223334444'),
('Elizabeth', 'Wilson', 'ewilson@email.com', '5', '6667778888'),
('James', 'Moore', 'jmoore@email.com', '5', '7778889999');

 */