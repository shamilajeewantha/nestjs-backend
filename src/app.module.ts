import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { OrderModule } from './order/order.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customer } from './auth/customer/customer.entity';
import { Shop } from './auth/shop/shop.entity';
import { Order } from './order/order.entity';


@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    password: '123456',
    username: 'postgres',
    entities: [Customer, Shop, Order],
    database: 'fitsync',
    synchronize: true,
    logging: true,
  }), AuthModule, OrderModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
