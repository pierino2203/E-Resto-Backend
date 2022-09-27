import { Router } from 'express'
import usersRouter from "./usersRoutes";
import ordersRouter from './ordersRoutes'

const router = Router()
router.use('/',usersRouter)
router.use('/',ordersRouter)
export default router;


