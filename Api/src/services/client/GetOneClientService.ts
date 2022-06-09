import { ClientRepository } from "../../repositories/ClientRepository";


export class GetOneClientService {
    constructor(
        private prismaClientRepository: ClientRepository
    ) {}
    
    async execute(id: string) {   
        if(!id) {
            return new Error("Id is required");
        }
        
        const response = await this.prismaClientRepository.getOne(id);

        return response;
    }
}