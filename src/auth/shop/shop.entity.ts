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



/* 

INSERT INTO shop (shop_name, address, phone, email, "password") VALUES
('Gucci', 'Via de Tornabuoni, 73R, 50123 Firenze FI, Italy', '055759221', 'G', '1'),
('Prada', 'Galleria Vittorio Emanuele II, 20121 Milano MI, Italy', '026572333', 'P', '1'),
('Louis Vuitton', '101 Avenue des Champs-Élysées, 75008 Paris, France', '0140531600', 'L', '1'),
('Burberry', '121 Regent St, London W1B 4TB, United Kingdom', '02078068000', 'B', '1'),
('Hermès', '24 Rue du Faubourg Saint-Honoré, 75008 Paris, France', '0140174700', 'H', '1'),
('Dior', '30 Avenue Montaigne, 75008 Paris, France', '0144075250', 'D', '1'),
('Chanel', '31 Rue Cambon, 75001 Paris, France', '0144746800', 'C', '1'),
('Ralph Lauren', '867 Madison Ave, New York, NY 10021, United States', '0212356898', 'R', '1'),
('Versace', 'Via Gesù, 12, 20121 Milano MI, Italy', '0286798311', 'V', '1'),
('Fendi', 'Via Borgognona, 40, 00187 Roma RM, Italy', '066992566', 'F', '1');

 */