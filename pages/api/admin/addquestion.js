// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Questions from "@/models/Question"
import connectDb from "../../middleware/mongoose"
import mockPaper from "@/models/MockPaper";
const handler =  async (req, res)=>{
    if(req.method == "POST"){
        const {Id, Question, Mcq,Answer, A, B, C, D} = req.body
        if(Mcq == 'false'){
            try{
            let mp = await mockPaper.findById(Id)
            let questioninmp = mp.questions
            let ques = await Questions.create({question: Question, answer:Answer, mcq:false})
            questioninmp.push(ques._id)
            return res.status(200).json({success:true, mp, ques})
            }catch(error){
                return res.status(404).json({success:false, error})
            }

        }else{
            let mp = await mockPaper.findById(Id)
            let questioninmp = mp.questions
            let ques = await Questions.create({question: Question, mcqAnswer:Answer, mcq:true, options:{A,B,C,D}})
            questioninmp.push(ques._id)
            return res.status(200).json({success:true, mp, ques}) 
        }
    }
    
    else if (req.method =="OPTIONS") {
        res.setHeader("Allow", "POST");
        res.setHeader("Access-Control-Allow-Headers", "content-type");
        return res.status(200).json({});
      }

}

export default connectDb(handler)