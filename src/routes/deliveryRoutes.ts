import {Router} from 'express'
import { deleteDelivery, deliveryLogin, editDelivery, findDeliveryById, getDelivery, registerDelivery } from '../controllers/deliverController';

const deliveryRouter = Router()

deliveryRouter.get('/delivery',getDelivery)
deliveryRouter.post('/delivery/register',registerDelivery)
deliveryRouter.post('/delivery/login',deliveryLogin)
deliveryRouter.get('/delivery/:id',findDeliveryById)
deliveryRouter.put('/delivery/:id',editDelivery)
deliveryRouter.delete('/delivery/:id',deleteDelivery)


export default deliveryRouter;