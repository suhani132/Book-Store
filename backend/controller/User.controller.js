import User from "../model/User.model.js";
import bcryptjs from "bcryptjs";

export const signup= async (req,res)=>{
    try{
        const {fullname,email,password}=req.body;
        const user = await User.findOne({email})
        if(user){
            return res.status(400).json({"message":"User already exists"});
        }
        const hashPassword = await bcryptjs.hash(password,8);
        const createdUser = new User({
            "fullname":fullname,
            "email":email,
            "password":hashPassword,
        })
        await createdUser.save()
        return res.status(201).json({"message":"User created successfully"});

    }catch(error){
        console.log("error :" + error.message);
        return res.status(501).json({"message":"Internal server Error"});
    }
}