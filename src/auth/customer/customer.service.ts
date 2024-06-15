import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Customer } from './customer.entity';

@Injectable()
export class CustomerService {
    constructor(
        @InjectRepository(Customer)
        private customersRepository: Repository<Customer>,
    ) {}
    
/*     async findAll(): Promise<Customer[]> {
        return this.customersRepository.find();
    } */

    async findAll(): Promise<Customer[]> {
        return this.customersRepository.find({
            where: { email: "alice.johnson@example.com"},
            relations: {
                orders: true,
            },
        });
    }
    
    async findOneByEmail(email: string): Promise<Customer> {
        return this.customersRepository.findOneBy({ email:email } );
    }
       
    async createCustomer(customerData: Partial<Customer>): Promise<Customer> {
        const newCustomer = this.customersRepository.create(customerData);
        return this.customersRepository.save(newCustomer);
    }

    
}
