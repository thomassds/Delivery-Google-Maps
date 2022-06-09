import { AddressRepository } from '../../repositories/AddressRepository';
import { ClientRepository } from '../../repositories/ClientRepository';
import { DeliveryRepository } from '../../repositories/DeliveryRepository';

export interface CreateDeliveryServiceRequest {
    delivery_date: Date,
    id_client: string,
    id_origin: string,
    id_destiny: string
}

export class CreateDeliveryService {
    constructor(
        private prismaDeliveryRepository: DeliveryRepository,
        private prismaClientRepository: ClientRepository,
        private prismaAddressRepository: AddressRepository
    ) {}
    
    async execute(request: CreateDeliveryServiceRequest) {
        const { delivery_date, id_client, id_destiny, id_origin } = request;

        const client = await this.prismaClientRepository.getOne(id_client);
        if(!client) {
            return new Error("CLient not found");
        }

        const destiny = await this.prismaAddressRepository.getOne(id_destiny);
        if(!destiny) {
            return new Error("Destiny not found");
        }

        const origin = await this.prismaAddressRepository.getOne(id_origin);
        if(!origin) {
            return new Error("Origin not found");
        }

        const response = await this.prismaDeliveryRepository.create({
            delivery_date: new Date(delivery_date),
            id_client,
            id_destiny,
            id_origin
        });

        return response;
    }
}