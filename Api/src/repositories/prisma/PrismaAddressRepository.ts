import { prisma } from '../../prisma';
import { AddressData, AddressRepository } from '../AddressRepository';

export class PrismaAddressRepository implements AddressRepository {
    async create({
        cep,
        street,
        number,
        district,
        complement,
        state,
        city,
        latitude,
        longitude
    }: AddressData) {

        const response = await prisma.address.create({
            data: {
                cep,
                street,
                number,
                district,
                complement,
                state,
                city,
                longitude,
                latitude
            }
        });

        return response;
    };

    async getAll() {
        const response = await prisma.address.findMany();

        return response;
    };

    async getOne(id: string) {
        const response = await prisma.address.findUnique({
            where: {
                id
            }
        })
        
        return response;
    };

    async getQuery(query: string) {
        if(query == ``) {
            const response = await prisma.$queryRaw`SELECT * FROM adresses`;

            return response;
        }
        
        const cep = "`SELECT * FROM adresses WHERE cep = ${cep}`"
        const response = await prisma.$queryRaw`${cep}`

        return response;    
    };
}