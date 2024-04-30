import mongoose, { mongo } from "mongoose";

const connectDb = handler => async (req,res)=>{
    if(mongoose.connections[0].readyState){
        return handler(req,res)
    }
    console.log(process.env.MONGODB_URI)
    await mongoose.connect(process.env.MONGODB_URI);
    return handler(req,res)
}

export default connectDb;