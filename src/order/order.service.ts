import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './order.entity';
import { Customer } from '../auth/customer/customer.entity';
import { Shop } from '../auth/shop/shop.entity';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private readonly ordersRepository: Repository<Order>,
    @InjectRepository(Customer)
    private readonly customersRepository: Repository<Customer>,
    @InjectRepository(Shop)
    private readonly shopsRepository: Repository<Shop>,
  ) {}

  async findAll(): Promise<Order[]> {
    return this.ordersRepository.find();
  }

/*   async findOneByCustomerId(customerId: number): Promise<Order[]> {
    return this.ordersRepository.find({ where: { customer_id: customerId } });
  } */

  async findOneByShopId(shopId: number): Promise<Order[]> {
    return this.ordersRepository.find({ where: { id: shopId } });
  }

  async removeOrder(orderId: number): Promise<void> {
    await this.ordersRepository.delete(orderId);
  }

  async createOrder(orderData: Partial<any>): Promise<Order> {
    console.log('orderData', orderData);

    const customer = await this.customersRepository.findOneBy({id:orderData.customerId});
    const shop = await this.shopsRepository.findOneBy({id : orderData.shopId});

    console.log('customer', customer);
    console.log('shop', shop);

    // Create a new order entity
    const newOrder = new Order();
    newOrder.customer = customer;
    newOrder.shop = shop;
    newOrder.measurements = orderData.measurements;
    newOrder.order_comments = orderData.order_comments;
    newOrder.expected_delivery_date = orderData.expected_delivery_date;


    return await this.ordersRepository.save(newOrder);
  }
}
