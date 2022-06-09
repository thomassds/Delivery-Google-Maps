import { prisma } from '../../prisma';
import { ClientDataByEmailOrPhone, ClientData ,ClientDataUpdate,ClientRepository } from '../ClientRepository';

export class PrismaClientRepository implements ClientRepository {
    async create({ name, phone, email }: ClientData) {
        const response = await prisma.client.create({
            data: {
                name,
                phone,
                email
            }
        });

        return response;
    };

    async getAll() {
        const response = await prisma.client.findMany();

        return response;
    };

    async getOne(id: string) {
        const response = await prisma.client.findUnique({
            where: {
                id
            }
        });

        return response;
    };

    async update({ id, name, phone, email }: ClientDataUpdate) {
        const response = await prisma.client.update({
            where: {
                id
            },
            data: {
                name,
                phone,
                email
            }
        });

        return response;
    };

    async getOneByEmailOrPhone({ phone, email }: ClientDataByEmailOrPhone) {
        const response = await prisma.client.findFirst({
            where: {
                phone,
                email
            }
        });

        return response;
    };
}