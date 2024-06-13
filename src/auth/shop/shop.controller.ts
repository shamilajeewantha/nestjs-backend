import { Controller, Get, Post, Query, Body } from '@nestjs/common';
import { ShopService } from './shop.service';
import { Shop } from './shop.entity';

@Controller('shop')
export class ShopController {
    constructor(private readonly shopService: ShopService) {}

    @Get()
    async findAll() {
      return this.shopService.findAll();
    }
// http://localhost:3000/customer/by-email?email=john.doe@example.com
    @Get('by-email')
    async findOneByEmail(@Query('email') email: string) {
      return this.shopService.findOneByEmail(email);
    }

    @Post()
    async createShop(@Body() shopData: Partial<Shop>) {
      return this.shopService.createShop(shopData);
    }
}
