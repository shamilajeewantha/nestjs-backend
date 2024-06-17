import { Injectable, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Customer } from './customer/customer.entity';
import { Shop } from './shop/shop.entity';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);

  constructor(private readonly jwtService: JwtService) {}

  generateJwtToken(customer: Customer|Shop): string {
    const payload = { email: customer.email, sub: customer.id };
    const token = this.jwtService.sign(payload); // Generate JWT token
    this.logger.log(`Generated JWT token for customer ${customer.id}`);
    this.logger.debug(`Token: ${token}`); // Log the generated token (debug level)
    return token; // Return the generated token
  }
}
