import { Request, Response } from 'express';

import { PrismaAddressRepository } from '../repositories/prisma/PrismaAddressRepository';
import { PrismaClientRepository } from '../repositories/prisma/PrismaClientRepository';
import { PrismaDeliveryRepository } from '../repositories/prisma/PrismaDeliveryRepository';

import { CreateDeliveryService } from '../services/delivery/CreateDeliveryService';
import { GetAllDeliveryService } from '../services/delivery/GetAllDeliveryService';
import { GetOneDeliveryService } from '../services/delivery/GetOneDeliveryService';

export class DeliveryController {
    async store(req: Request, res: Response) {
        const { delivery_date, id_client, id_origin, id_destiny } = req.body;

        const prismaDeliveryRepository = new PrismaDeliveryRepository();
        const prismaClientRepository = new PrismaClientRepository();
        const prismaAddressRepository = new PrismaAddressRepository();

        const createDeliveryService = new CreateDeliveryService(
            prismaDeliveryRepository,
            prismaClientRepository,
            prismaAddressRepository
        );

        const response = await createDeliveryService.execute({
            delivery_date,
            id_client,
            id_destiny,
            id_origin
        });

        if(response instanceof Error) {
            return res.status(400).json(response.message);
        }
        
        return res.json(response);
    };

    async index(req: Request, res: Response) {
        const prismaDeliveryRepository = new PrismaDeliveryRepository()

        const getAllDeliveryService = new GetAllDeliveryService(
            prismaDeliveryRepository
        );

        const response = await getAllDeliveryService.execute();
        if(response instanceof Error) {
            return res.status(400).json(response.message);
        }

        return res.json(response);
    };

    async indexOne(req: Request, res: Response) {
        const { id } = req.params;

        const prismaDeliveryRepository = new PrismaDeliveryRepository();

        const getOneDeliveryService = new GetOneDeliveryService(
            prismaDeliveryRepository
        );
        
        const response = await getOneDeliveryService.execute(id);
        if(response instanceof Error) {
            return res.status(400).json(response.message);
        }

        return res.json(response);
    }
}