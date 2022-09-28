import {Router} from 'express'
import { getDiets, postDiets } from '../controllers/dietHandler';

const dietRouter = Router();
dietRouter.get('/diet',getDiets)
dietRouter.post('/diet',postDiets)

export default dietRouter;