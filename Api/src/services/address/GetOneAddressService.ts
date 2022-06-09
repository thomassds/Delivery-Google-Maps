import { AddressRepository } from '../../repositories/AddressRepository';

export class GetOneAddressService {
    constructor(
        private prismaAddressRepository: AddressRepository
    ) {}
    
    async execute(id: string) {
        const response = await this.prismaAddressRepository.getOne(id);

        return response;
    }
}