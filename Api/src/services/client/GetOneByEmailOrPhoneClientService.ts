import { ClientRepository } from "../../repositories/ClientRepository";

interface GetOneByEmailOrPhoneClientServiceRequest {
    name?: string,
    phone: string,
    email: string
}

export class GetOneByEmailOrPhone {
    constructor(
        private prismaClientRepository: ClientRepository
    ) {}
    
    async execute({ email, phone }: GetOneByEmailOrPhoneClientServiceRequest) {           
        if(!email) {
            return new Error("Email is required");
        }

        if(!phone) {
            return new Error("Phone is required");
        }
        


        const response = await this.prismaClientRepository.getOneByEmailOrPhone({
            email,
            phone
        });

        return response;
    }
}