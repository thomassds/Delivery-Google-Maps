import { DeliveryRepository } from "../../repositories/DeliveryRepository";


export class GetAllDeliveryService {
    constructor(
        private prismaDeliveryRepository: DeliveryRepository
    ) {}
    
    async execute() {   
        const response = await this.prismaDeliveryRepository.getAll();

        return response;
    }
}