import { Order } from "../models/placeOrder.model.js";

const orderProduct = async(req , res) =>{
    const {firstname, lastname, address, contact, products, finalPrice} = req.body; 

    if(!firstname || !lastname || !address || !contact || !products || !finalPrice){
        return res.status(400).json({error: "All fields are required"})
    }; 
    
    try{
        const newOrder = new Order({
            firstname, 
            lastname,
            address,
            contact,
            products,
            finalPrice,
        });
        const savedOrder = await newOrder.save(); 

        res.status(200).json({
            message: "Order placed successfully",
            orderId: savedOrder._id,
        })

    }
    catch(error){
        res.status(500).json({
            error:"Failed to place the order"
        })
    }
}

export { orderProduct };
