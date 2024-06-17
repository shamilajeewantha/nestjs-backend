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

/*     @Get('by-customer')
    async findOneByCustomerId(@Query('customerId') customerId: number): Promise<Order[]> {
      return this.orderService.findOneByCustomerId(customerId);
    } */

    @Get('by-shop')
    async findOneByShopId(@Query('shopId') shopId: number): Promise<Order[]> {
      return this.orderService.findOneByShopId(shopId);
    }

    @Delete(':id')
    async removeOrder(@Param('id') id: number): Promise<void> {
      return this.orderService.removeOrder(id);
    }

// POST http://localhost:3000/order/add
// {
//   "customerId": 1,
//   "shopId": 3,
//   "measurements": {"m1": {"height":23,"value":175}, "ms": {"height":63,"value":135}},
//   "order_comments": "new order co",
//   "expected_delivery_date": "2021-06-16 13:57:07.875737"
// }

    @Post('add')
    async createOrder(@Body() orderData: Partial<Order>) {
      const newOrder = await this.orderService.createOrder(orderData);
      return {
        message: 'Order created successfully',
        order: newOrder,
      };
    }
}
