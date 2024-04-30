// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import User from "../../models/User"
import connectDb from "../../middleware/mongoose"
import CryptoJS from "crypto-js"
import jwt from "jsonwebtoken"
const handler =  async (req, res)=>{
        if(req.method == "POST"){
            let id = jwt.verify(req.body.token, process.env.JWT_KEY)
            let user = await User.findById(id.id)
            if(!user){
                return res.status(406).json({success:false,error: "User not exists"})
            }
            let bytes  = CryptoJS.AES.decrypt(user.password, process.env.KEY);
            let len = bytes.toString(CryptoJS.enc.Utf8).length;
            let encryptedpass = ""
            for(let i = 0; i < len; i++){
                encryptedpass+="*"
            }
            res.status(200).json({success:true, user, pass: encryptedpass})
        }
        
        else{
            return res.status(405).json({error: "This method is not allowed"})
        }
    

}

export default connectDb(handler)