import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Shop } from './shop.entity';

@Injectable()
export class ShopService {
    constructor(
        @InjectRepository(Shop)
        private shopsRepository: Repository<Shop>,
    ) {}
    
    async findAll(): Promise<Shop[]> {
        return this.shopsRepository.find();
    }

    async findOneByEmail(email: string): Promise<Shop | null> {
        return this.shopsRepository.findOne({
          where: { email: email },
          relations: ['orders', 'orders.customer'], // Specify relations to be loaded
        });
      }    

/*     async findOneByEmail(email: string): Promise<Shop> {
        return this.shopsRepository.findOneBy({ email:email } );
    }

    async findOneByEmail(id: number): Promise<Shop> {
        return this.shopsRepository.findOneBy({ id } );
    } */
       
    async createShop(shopData: Partial<Shop>): Promise<Shop> {
        const newShop = this.shopsRepository.create(shopData);
        return this.shopsRepository.save(newShop);
    }   
}
