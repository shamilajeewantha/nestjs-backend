import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomerService {
    getHello(): string {
        return 'Welcome to customer!';
    }
}
