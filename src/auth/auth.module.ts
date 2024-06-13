import { Module } from '@nestjs/common';
import { CustomerController } from './customer/customer.controller';
import { ShopController } from './shop/shop.controller';
import { ShopService } from './shop/shop.service';
import { CustomerService } from './customer/customer.service';

@Module({
  controllers: [CustomerController, ShopController],
  providers: [ShopService, CustomerService]
})
export class AuthModule {}
