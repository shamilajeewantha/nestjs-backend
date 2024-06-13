import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('customer')
export class Customer {
  @PrimaryGeneratedColumn()
  customer_id: number;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  email: string;

  @Column()
  password: string;
}
