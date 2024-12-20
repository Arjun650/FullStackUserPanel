import express from 'express'
import cors from 'cors'
import uploadProduct from './routes/uploadProduct.routes.js'
import getProducts from './routes/uploadProduct.routes.js'
import orderProduct from './routes/placeOrder.routes.js'

const app = express()

app.use(cors(
    {
    origin:["https://deploy-mern-1whq.vercel.app"],
    methods:["POST", "GET"],
    credentials:true  
    }
));

app.use(express.json())

app.use('/api/product', uploadProduct)
app.use('/api/getProduct', getProducts)
app.use('/api/order', orderProduct)

export default app; 