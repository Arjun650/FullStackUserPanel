import mongoose, {Schema} from "mongoose";

const product = new Schema({
    img:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    }
},{timestamps:true});

export const Product = mongoose.model("Product", product)