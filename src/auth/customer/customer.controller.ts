import { Body, Controller, Get, Post, Query, BadRequestException } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { Customer } from './customer.entity';
import { AuthService } from '../auth.service';

const secretKey = 'your_secret_key';

@Controller('customer')
export class CustomerController {
  constructor(
    private readonly customerService: CustomerService,
    private readonly authService: AuthService,
  ) {}


    @Get()
    async findAll() {
      return this.customerService.findAll();
    }

  // GET http://localhost:3000/customer/by-email?email=alice.johnson@example.com
    @Get('by-email')
    async findOneByEmail(@Query('email') email: string) {
      return this.customerService.findOneByEmail(email);
    }

// POST http://localhost:3000/customer/register
// {
//   "first_name": "John",
//   "last_name": "Doe",
//   "email": "johndoe@example.com",
//   "password": "securepassword"
// }
    
    @Post('register')
    async createCustomer(@Body() customerData: Partial<Customer>) {
        const newCustomer = await this.customerService.createCustomer(customerData);
        return {
            message: 'Customer created successfully',
            customer: newCustomer,
        };
    }


// POST http://localhost:3000/customer/login
//{
//   "email": "johndample.com",
//   "password": "secepassword"
// }

    @Post('login')
    async login(@Body() loginData: { email: string, password: string }) {
      const customer = await this.customerService.findOneByEmail(loginData.email);
      if (!customer) {
        throw new BadRequestException('Invalid email or password');
      }

      const isPasswordValid = loginData.password === customer.password;
      if (!isPasswordValid) {
        throw new BadRequestException('Invalid email or password');
      }

      const email = customer.email;
      const token = this.authService.generateJwtToken(customer);
      return { message: 'Login successful', email:email, token };
    }
}
