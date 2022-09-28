import { Router } from 'express'
import usersRouter from "./usersRoutes";
import ordersRouter from './ordersRoutes';
import productRouter from './productRoutes'

const router = Router()
router.use('/',usersRouter)
router.use('/',ordersRouter)
router.use('/',productRouter)
export default router;


