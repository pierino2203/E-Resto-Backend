import {Router} from 'express'
import { getCategory, postCategory } from '../controllers/categoryHandler';

const categoryRouter = Router()
categoryRouter.get('/category',getCategory)
categoryRouter.post('/category',postCategory)

export default categoryRouter;