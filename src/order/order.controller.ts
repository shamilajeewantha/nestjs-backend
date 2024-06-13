import { Controller, Get, Delete, Query, Param, Body, Post } from '@nestjs/common';
import { OrderService } from './order.service';
import { Order } from './order.entity';

@Controller('order')
export class OrderController {
    constructor(private readonly orderService: OrderService) {}

    @Get()
    async findAll(): Promise<Order[]> {
      return this.orderService.findAll();
    }

    @Get('by-customer')
    async findOneByCustomerId(@Query('customerId') customerId: number): Promise<Order[]> {
      return this.orderService.findOneByCustomerId(customerId);
    }

    @Get('by-shop')
    async findOneByShopId(@Query('shopId') shopId: number): Promise<Order[]> {
      return this.orderService.findOneByShopId(shopId);
    }

    @Delete(':id')
    async removeOrder(@Param('id') id: number): Promise<void> {
      return this.orderService.removeOrder(id);
    }

    @Post()
    async createOrder(@Body() orderData: Partial<Order>): Promise<Order> {
      return this.orderService.createOrder(orderData);
    }
}
