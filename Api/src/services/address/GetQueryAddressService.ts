import { AddressRepository } from '../../repositories/AddressRepository';

export interface GetQueryAddressServiceRequest {
    cep?: string,
    street?: string,
    number?: string
    district?: string,
    complement?: string,
    state?: string,
    city?: string,
}


export class GetQueryAddressService {
    constructor(
        private prismaAddressRepository: AddressRepository
    ) {}
    
    async execute({ cep, street, number, district, complement, state, city }: any) {
        let query = ``;
        
        query = cep ? query + ` cep = ${cep}` : query;
        query = street ? query + ` street = ${street}` : query;
        query = number ? query + ` number = ${number}` : query;
        query = district ? query + ` district = ${district}` : query;
        query = complement ? query + ` complement = ${complement}` : query;
        query = state ? query + ` state = ${state}` : query;
        query = city ? query + ` city = ${city}` : query;
        
        const response = await this.prismaAddressRepository.getQuery(query);

        return response;
    }
}