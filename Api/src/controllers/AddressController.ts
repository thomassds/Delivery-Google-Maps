import { Request, Response } from 'express';
import { PrismaAddressRepository } from '../repositories/prisma/PrismaAddressRepository';
import { CreateAddressService } from '../services/address/CreateAddressService';
import { GetAllAddressService } from '../services/address/GetAllAddressService';
import { GetOneAddressService } from '../services/address/GetOneAddressService';
import { GetQueryAddressService } from '../services/address/GetQueryAddressService';

export class AddressController {
    async store(req: Request, res: Response) {
        const { cep, street, number, district, complement, state, city, longitude, latitude } = req.body;
        
        const prismaAddressRepository = new PrismaAddressRepository();

        const createAddressService = new CreateAddressService(
            prismaAddressRepository
        );

        const response = await createAddressService.execute({
            cep,
            street,
            number,
            district,
            complement,
            state,
            city,
            longitude,
            latitude
        });

        return res.json(response);
    };

    async index(req: Request, res: Response) {
        const prismaAddressRepository = new PrismaAddressRepository();

        const getAllAddressService = new GetAllAddressService(
            prismaAddressRepository
        );

        const response = await getAllAddressService.execute();

        return res.json(response);
    };

    async indexOne(req: Request, res: Response) {
        const { id } = req.params;

        const prismaAddressRepository = new PrismaAddressRepository();

        const getOneAddressService = new GetOneAddressService(
            prismaAddressRepository
        );

        const response = await getOneAddressService.execute(id);

        return res.json(response);
    };

    async indexQuery(req: Request, res: Response) {
        const { cep, street, number, district, complement, state, city } = req.query;
        
        const prismaAddressRepository = new PrismaAddressRepository();

        const getQueryAddressService = new GetQueryAddressService(
            prismaAddressRepository
        );

        const response = await getQueryAddressService.execute({
            cep,
            street,
            number,
            district,
            complement,
            state,
            city
        });
        
        return res.json(response);
    }
}