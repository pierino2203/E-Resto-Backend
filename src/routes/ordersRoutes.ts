import { Router } from 'express'
import { deleteOrder, editOrder, getOrderById, getOrders, postOrders } from '../controllers/orderController';

const orderRouter = Router();
orderRouter.get('/order',getOrders)
orderRouter.post('/order',postOrders)
orderRouter.get('/order/:id',getOrderById)
orderRouter.delete('/order/:id',deleteOrder)
orderRouter.put('/order/:id',editOrder)
export default orderRouter;