import { Controller, Get, Post, Query, Body, BadRequestException } from '@nestjs/common';
import { ShopService } from './shop.service';
import { Shop } from './shop.entity';
import { AuthService } from '../auth.service';

const secretKey = 'your_secret_key';

@Controller('shop')
export class ShopController {
    constructor(
      private readonly shopService: ShopService,
      private readonly authService: AuthService,
    ) {}

    @Get()
    async findAll() {
      return this.shopService.findAll();
    }
// http://localhost:3000/shop/by-email?email=info@awesomeshop.com
    @Get('by-email')
    async findOneByEmail(@Query('email') email: string) {
      return this.shopService.findOneByEmail(email);
    }

    @Post('register')
    async createShop(@Body() shopData: Partial<Shop>) {
      const newShop = await this.shopService.createShop(shopData);
      return {
        message: 'Shop created successfully',
        shop: newShop,
      };
    }

// POST http://localhost:3000/shop/login
// {
//   "email": "info@awesomeshop.com",
//   "password": "shoppassword"
// }


    @Post('login')
    async login(@Body() loginData: { email: string, password: string }) {
      const customer = await this.shopService.findOneByEmail(loginData.email);
      if (!customer) {
        throw new BadRequestException('Invalid email or password');
      }

      const isPasswordValid = loginData.password === customer.password;
      if (!isPasswordValid) {
        throw new BadRequestException('Invalid email or password');
      }

      const email = customer.email;
      const token = this.authService.generateJwtToken(customer);
      return { message: 'Shop Login successful', email:email, token };
    }
}
