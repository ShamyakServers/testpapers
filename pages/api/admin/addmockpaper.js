// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Question from "@/models/Question"
import connectDb from "@/middleware/mongoose"
import MockPaper from "@/models/MockPaper";
const handler =  async (req, res)=>{
    if(req.method == "POST"){
        const {name,Questions, price, time} = req.body
            let allques = Questions.split(",")
            try{
                let newt = Number(time)
                console.log("hi")
            let mock = await MockPaper.create({title:name, questions:allques, time:newt, price})
                console.log(allques, "windows")
                console.log(mock, "mock")
            return res.status(200).json({success:true, mock, allques})
            }catch(error){
                console.log(error)
                return res.status(404).json({success:false, error})
            }

    }
    
    else if (req.method =="OPTIONS") {
        res.setHeader("Allow", "POST");
        res.setHeader("Access-Control-Allow-Headers", "content-type");
        return res.status(200).json({});
      }
      else{
        return res.status(404).json({"huihui": "huihiu"})
      }

}

export default connectDb(handler)