import nodemailer from "nodemailer"
import ForgotReq from "../../models/ForgotRequest"
import SignupReq from "../../models/SignupReq"
import User from "../../models/User"
import connectDb from "../../middleware/mongoose"
// import Forgot from "../forgot"
async function handler(req, res) {
    console.log("HELLO REQUEST CAME")
    if (req.method == "OPTIONS") {
        res.setHeader("Allow", "POST");
        res.setHeader("Access-Control-Allow-Headers", "content-type");
        return res.status(202).json({});
      }
    if(req.body.forgotPass){
        try{
    let user = await User.findOne({email:req.body.email})
    if(!user){
        return res.status(400).json({success: false, error: "User not exists"})
    }
    let id = Math.floor(Math.floor(Math.random() * Date.now())/100)
    let newreq = new ForgotReq({
        email:req.body.email,
        forgotreqid: id
    })
    await newreq.save()
    let transporter = nodemailer.createTransport({
        service: "hotmail",
        // secure: true,
        // port: 465,
        auth: {
          user: process.env.NEXT_PUBLIC_EMAIL,
          pass: process.env.PASS,
        },
      });

    let mailOptions = {
        from: process.env.NEXT_PUBLIC_EMAIL,
        to: req.body.email,
        html: 
        `
        <h1>Bangexams Request for Password Reset</h1>
        <img src="https://www.codeswear.com/_next/image?url=%2Flogo.png&w=256&q=75"/>
        <p>
        We have recieved a request for your password Reset.
        Your Password Reset url is: http://10.69.28.241:3000/forgotc?id=${id}
        <br/>
        Thank you,
        Bangexams Team
        </p>
        `,
        subject: 'Regarding password reset request Bangexams'
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
    return res.status(200).json({success: true})
}catch(e){
    console.log(e)
    console.log("HELLO ERROR CAME")
    return res.status(500).json({success: false, error: e})
}
    }
    else{
        try{
            let user = await User.findOne({email:req.body.email})
            if(user){
                return res.status(406).json({success:false,error: "User already exists"})
            }
            let id = Math.floor(Math.floor(Math.random() * Date.now())/100)
            let newreq = new SignupReq({
                email:req.body.email,
                reqid: id
            })
            await newreq.save()
            let transporter = nodemailer.createTransport({
                service: "hotmail",
                // secure: true,
                // port: 465,
                auth: {
                  user: process.env.NEXT_PUBLIC_EMAIL,
                  pass: process.env.PASS
                },
              });
        
            let mailOptions = {
                from: process.env.NEXT_PUBLIC_EMAIL,
                to: req.body.email,
                html: 
                `
                <h1>Bangexams Request for Signup</h1>
                <img src="https://www.codeswear.com/_next/image?url=%2Flogo.png&w=256&q=75"/>
                <p>
                We have recieved a request for your Signup.
                Your Signup url is: http://10.69.28.241:3000/signupc?id=${id}
                <br/>
                Thank you,
                Bangexams Team
                </p>
                `,
                subject: 'Regarding signup request Bangexams'
            };
        
            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.log(error);
                } else {
                    console.log('Email sent: ' + info.response);
                }
            });
            return res.status(200).json({success: true})
        }catch(e){
            console.log(e)
            console.log("HELLO ERROR CAME")
            return res.status(500).json({success: false, error: e})
        }
    }
}
export default connectDb(handler)