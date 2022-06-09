import { DeliveryRepository } from "../../repositories/DeliveryRepository";


export class GetOneDeliveryService {
    constructor(
        private prismaDeliveryRepository: DeliveryRepository
    ) {}
    
    async execute(id: string) {   
        const response = await this.prismaDeliveryRepository.getOne(id);

        return response;
    }
}