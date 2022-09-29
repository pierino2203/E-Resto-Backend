import {Router} from 'express'
import router from '.';
import { getProduct } from '../controllers/productController';

const productRouter = Router();
productRouter.get('/product',getProduct)
export default productRouter;