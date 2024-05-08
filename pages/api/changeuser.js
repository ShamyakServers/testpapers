// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import User from "../../models/User"
import connectDb from "../../middleware/mongoose"
import jwt from "jsonwebtoken"
const handler =  async (req, res)=>{
        if(req.method == "POST"){
            let user = await User.findOne({email:req.body.email})
            if(!user){
                return res.status(406).json({success:false,error: "User not exists"})
            }
            else{
                user = await User.findOneAndUpdate({email:req.body.email}, req.body.creds)
                return res.status(200).json({success:true,msg: "Details changed"})
            }
        }
        
        else{
            return res.status(405).json({success:false,error: "This method is not allowed"})
        }
    

}

export default connectDb(handler)