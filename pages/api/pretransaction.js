const https = require('https');
const PaytmChecksum = require('paytmchecksum'); 
import connectDb from "/middleware/mongoose";

const handler = async (req, res) => {
    if(req.method == "POST"){
        const {oid, price, sess} = req.body
    var paytmParams = {};

    paytmParams.body = {
        "requestType": "Payment",
        "mid": process.env.NEXT_PUBLIC_PAYTM_MID,
        "websiteName": "YOUR_WEBSITE_NAME",
        "orderId": oid,
        "callbackUrl": `/api/posttransaction`,
        "txnAmount": {
            "value": price,
            "currency": "INR",
        },
        "userInfo": {
            "custId": sess.user.email,
        },
    };

    /*
    * Generate checksum by parameters we have in body
    * Find your Merchant Key in your Paytm Dashboard at https://dashboard.paytm.com/next/apikeys
    */
    const checksum = PaytmChecksum.generateSignature(JSON.stringify(paytmParams.body), process.env.PAYTM_KEY)

        paytmParams.head = {
            "signature": checksum
        };

        var post_data = JSON.stringify(paytmParams);
        const requestAsync = ()=>{
            return new Promise((resolve, reject)=>{
                var options = {

                    /* for Staging */
                    hostname: 'securegw-stage.paytm.in',
        
                    /* for Production */
                    // hostname: 'securegw.paytm.in',
        
                    port: 443,
                    path: `/theia/api/v1/initiateTransaction?mid=${process.env.NEXT_PUBLIC_PAYTM_MID}&orderId=${oid}`,
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Content-Length': post_data.length
                    }
                };
        
                var response = "";
                var post_req = https.request(options, function (post_res) {
                    post_res.on('data', function (chunk) {
                        response += chunk;
                    });
        
                    post_res.on('end', function () {
                        console.log('Response: ', response);
                    });
                });
                console.log(response)
                post_req.write(post_data);
                post_req.end();
                resolve(response)
            })
        }
        let myr = await requestAsync()
        res.status(200).json({myr})
}else{
    res.status(405).json({"error": "THIs method Is NoT AllOweD"})
}
}
export default connectDb(handler)