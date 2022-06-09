import { Router } from 'express';

import { ClientController } from '../controllers/ClientController';
import { AddressController } from '../controllers/AddressController';
import { DeliveryController } from '../controllers/DeliveryController';

export const routes = Router();

routes.post('/client', new ClientController().store);
routes.get('/clients', new ClientController().index);
routes.get('/client/:id', new ClientController().indexOne);
routes.put('/client/:id', new ClientController().update);

routes.post('/address', new AddressController().store);
routes.get('/address', new AddressController().index);
routes.get('/address/:id', new AddressController().indexOne);
routes.get('/query/address', new AddressController().indexQuery);

routes.post('/delivery', new DeliveryController().store);
routes.get('/deliveries', new DeliveryController().index);
routes.get('/delivery/:id', new DeliveryController().indexOne);