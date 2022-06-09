import { Request, Response } from "express";
import { PrismaClientRepository } from "../repositories/prisma/PrismaClientRepository";
import { CreateClientService } from "../services/client/CreateClientService";
import { GetAllClientService } from "../services/client/GetAllClientService";
import { GetOneClientService } from "../services/client/GetOneClientService";
import { UpdateClientService } from "../services/client/UpdateClientService";

export class ClientController {
    async store(req: Request, res: Response) {
        const { name, phone, email } = req.body;

        const prismaClientRepository = new PrismaClientRepository();

        const createClientService = new CreateClientService(
            prismaClientRepository
        );
        
        const response = await createClientService.execute({
            name,
            phone,
            email
        });

        if(response instanceof Error) {
            return res.status(400).json(response.message);
        }

        return res.json(response);
    };

    async index(req: Request, res: Response) {
        const prismaClientRepository = new PrismaClientRepository();

        const getAllClientService = new GetAllClientService(
            prismaClientRepository
        );

        const response = await getAllClientService.execute();
        if(response instanceof Error) {
            return res.status(400).json(response.message);
        }

        return res.json(response);
    };

    async indexOne(req: Request, res: Response) {
        const { id } = req.params;

        const prismaClientRepository = new PrismaClientRepository();

        const getOneClientService = new GetOneClientService(
            prismaClientRepository
        );

        const response = await getOneClientService.execute(id);
        if(response instanceof Error) {
            return res.status(400).json(response.message);
        }

        return res.json(response);
    };

    async update(req: Request, res: Response) {
        const { id } = req.params;
        const { name, phone, email } = req.body;

        const prismaClientRepository = new PrismaClientRepository();

        const updateClientService = new UpdateClientService(
            prismaClientRepository
        );

        const response = await updateClientService.execute({ id, name, phone, email });
        if(response instanceof Error) {
            return res.status(400).json(response.message);
        }

        return res.json(response);
    }
}