import { Router } from 'express'
import usersRouter from "./usersRoutes";
import ordersRouter from './ordersRoutes';
import productRouter from './productRoutes';
import categoryRouter from './categoryRoutes';
import dietRouter from './dietRouter'
import mailRouter from './mailRoutes';
import stripeRouter from './paymentRoutes';

const router = Router()
router.use('/',usersRouter)
router.use('/',ordersRouter)
router.use('/',productRouter)
router.use('/',categoryRouter)
router.use('/',dietRouter)
router.use('/', mailRouter)
router.use('/', stripeRouter)
export default router;


