export default async function handler(req,res){
    const {otp} = req.body;
    if(!otp){
        res.status(400).json({error: "OTP is required"});
    }
    if(otp===process.env.OTP){
        res.status(200).json({message: "OTP verified"});
    }
}