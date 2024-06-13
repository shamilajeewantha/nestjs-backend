import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './order.entity';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private ordersRepository: Repository<Order>,
  ) {}

  async findAll(): Promise<Order[]> {
    return this.ordersRepository.find();
  }

  async findOneByCustomerId(customerId: number): Promise<Order[]> {
    return this.ordersRepository.find({ where: { customer_id: customerId } });
  }

  async findOneByShopId(shopId: number): Promise<Order[]> {
    return this.ordersRepository.find({ where: { shop_id: shopId } });
  }

  async removeOrder(orderId: number): Promise<void> {
    await this.ordersRepository.delete(orderId);
  }

  async createOrder(orderData: Partial<Order>): Promise<Order> {
    const newOrder = this.ordersRepository.create(orderData);
    return this.ordersRepository.save(newOrder);
  }
}
