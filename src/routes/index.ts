import { Router } from 'express'
import usersRouter from "./usersRoutes";
import ordersRouter from './ordersRoutes';
import productRouter from './productRoutes';
import categoryRouter from './categoryRoutes';
import dietRouter from './dietRouter'

const router = Router()
router.use('/',usersRouter)
router.use('/',ordersRouter)
router.use('/',productRouter)
router.use('/',categoryRouter)
router.use('/',dietRouter)
export default router;


