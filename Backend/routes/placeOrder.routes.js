import {Router} from 'express'
import { orderProduct } from '../controllers/order.controller.js';

const router = Router()

router.post('/placeOrder', orderProduct);

export default router