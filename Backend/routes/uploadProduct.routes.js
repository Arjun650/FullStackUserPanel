import {Router} from 'express'
import {upload} from '../middleware/multer.middleware.js';
import { getProducts, uploadProduct } from '../controllers/product.controller.js';


const router = Router()

router.post('/uploadProduct',upload.single('img'), uploadProduct);

router.get('/getProducts', getProducts); 

export default router