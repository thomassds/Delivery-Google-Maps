import { AddressRepository } from '../../repositories/AddressRepository';

export class GetAllAddressService {
    constructor(
        private prismaAddressRepository: AddressRepository
    ) {}
    
    async execute() {
        const response = await this.prismaAddressRepository.getAll();

        return response;
    }
}