import { Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './order.entity';
import { Shop } from '../auth/shop/shop.entity';
import { Customer } from '../auth/customer/customer.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Order, Shop, Customer])],
  controllers: [OrderController],
  providers: [OrderService]
})
export class OrderModule {}
