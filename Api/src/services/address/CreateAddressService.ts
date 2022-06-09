import { AddressRepository } from '../../repositories/AddressRepository';

export interface CreateAddressServiceRequest {
    cep: string,
    street: string,
    number: string
    district: string,
    complement: string,
    state: string,
    city: string,
    longitude: string,
    latitude: string
}

export class CreateAddressService {
    constructor(
        private prismaAddressRepository: AddressRepository
    ) {}
    
    async execute(request: CreateAddressServiceRequest) {
        const { cep, street, number, district, complement, state, city, latitude, longitude } = request;

        const response = await this.prismaAddressRepository.create({
            cep,
            street,
            state,
            number,
            district,
            complement,
            city,
            latitude,
            longitude
        });

        return response;
    }
}