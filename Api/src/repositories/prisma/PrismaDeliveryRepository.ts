import { prisma } from '../../prisma';
import { DeliveryData, DeliveryRepository } from '../DeliveryRepository';

export class PrismaDeliveryRepository implements DeliveryRepository {
    async create({ delivery_date, id_client, id_destiny, id_origin }: DeliveryData) {
        const response = await prisma.delivery.create({
            data: {
                delivery_date,
                id_client,
                id_destiny,
                id_origin
            }
        });

        return response;
    };

    async getAll() {
        const response = await prisma.delivery.findMany({
            include: {
                client: true,
                destiny: true,
                origin: true
            }
        });

        return response;
    };

    async getOne(id: string) {
        const response = await prisma.delivery.findUnique({
            where: {
                id
            },
            include: {
                client: true,
                destiny: true,
                origin: true
            }
        });

        return response;
    };
}
