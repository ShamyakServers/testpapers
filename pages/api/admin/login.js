
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import jwt from "jsonwebtoken"
import connectDb from "@/middleware/mongoose";
const handler =  async (req, res)=>{
    console.log("winiwjeijwieji")
    if(req.method == "POST"){
        const {username, password} = req.body
        if(username=='AdminBangExams' && password=='windows2024@'){
            return res.status(200).json({success:true})
        }
        return res.status(200).json({success:false})
    }
    
    else if (req.method =="OPTIONS") {
        res.setHeader("Allow", "POST");
        res.setHeader("Access-Control-Allow-Headers", "content-type");
        return res.status(200).json({});
    }

}

export default connectDb(handler)