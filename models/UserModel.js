import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        minLength: 3,
        trim: true,
        },
    username:String,
    email:String,
    password:String,
    cart:{
        type: Array,
        default:[]
    },
    isadmin:Boolean,
    orders:{
        type:Array,
        default:[]
    },
    contact:Number,
    picture:String
});

export default mongoose.model('User',UserSchema);