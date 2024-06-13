import { Module } from '@nestjs/common';
import { CustomerController } from './customer/customer.controller';
import { ShopController } from './shop/shop.controller';
import { ShopService } from './shop/shop.service';
import { CustomerService } from './customer/customer.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Shop } from './shop/shop.entity';
import { Customer } from './customer/customer.entity';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [TypeOrmModule.forFeature([Shop, Customer]),
  JwtModule.register({
    secret: 'your_secret_key', // should be an environment variable in production
    signOptions: { expiresIn: '1h' },
  }),
],
  controllers: [CustomerController, ShopController],
  providers: [ShopService, CustomerService, AuthService]
})
export class AuthModule {}
