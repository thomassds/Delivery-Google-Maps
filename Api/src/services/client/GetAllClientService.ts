import { ClientRepository } from "../../repositories/ClientRepository";


export class GetAllClientService {
    constructor(
        private prismaClientRepository: ClientRepository
    ) {}
    
    async execute() {   
        const response = await this.prismaClientRepository.getAll();

        return response;
    }
}