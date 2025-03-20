import mongoose from "mongoose";

const ProductSchema = mongoose.Schema({
    image:String,
    name:String,
    price:Number,
    discount:{
        type:Number,
        default:0
    },
    bgcolor:String,
    panecolor:String,
    textcolor:String
});

export default mongoose.model('Product',ProductSchema);