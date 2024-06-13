import { Injectable } from '@nestjs/common';

@Injectable()
export class ShopService {
    getHello(): string {
        return 'Welcome to shop!';
    }    
}
