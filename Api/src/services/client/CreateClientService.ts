import { ClientRepository } from "../../repositories/ClientRepository";

interface CreateClientServiceRequest {
    name: string,
    phone: string,
    email: string
}

export class CreateClientService {
    constructor(
        private prismaClientRepository: ClientRepository
    ) {}
    
    async execute(request: CreateClientServiceRequest) {
        const { name, phone, email } = request;
        
        if(!name) {
            return new Error("Name is required");
        }

        if(!phone) {
            return new Error("Phone is required");
        }

        if(!email) {
            return new Error("Email is required");
        }
        
        if(await this.prismaClientRepository.getOneByEmailOrPhone({
            phone,
            email
        })) {
            return new Error("Client alredy registered with this phone or email");
        }

        const response = await this.prismaClientRepository.create({
            name,
            phone, 
            email
        })

        return response;
    }
}