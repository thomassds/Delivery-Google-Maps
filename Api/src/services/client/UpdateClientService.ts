import { ClientRepository } from "../../repositories/ClientRepository";

interface UpdateClientServiceRequest {
    id: string,
    name?: string,
    phone?: string,
    email?: string
}

export class UpdateClientService {
    constructor(
        private prismaClientRepository: ClientRepository
    ) {}
    
    async execute(request: UpdateClientServiceRequest) {
        const { id, name, phone, email } = request;
        
        if(!id) {
            return new Error("Id is required");
        }

        const response = await this.prismaClientRepository.update({
            id,
            name,
            phone, 
            email
        })

        return response;
    }
}