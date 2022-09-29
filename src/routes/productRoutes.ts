import {Router} from 'express'
import { getProduct, getProductById, postProduct } from '../controllers/productController';

const productRouter = Router();
productRouter.get('/product',getProduct)
productRouter.post('/product',postProduct)
productRouter.get('/product/:id',getProductById)
export default productRouter;