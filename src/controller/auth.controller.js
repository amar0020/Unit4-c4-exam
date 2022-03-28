const User = require("../module/user.module")

const jwt = require("jsonwebtoken")
require('dotenv').config()




const register =async (req,res)=>{
    const user = await User.create(req.body);

    const token = jwt.sign({user}, process.env.mysecret );

    res.send({user,token})
}


const login = async (req,res)=>{
    const user = await User.findOne({email:req.body.email}).lean.exec();

    if(!user){
        res.send({message:"wrong email or pass"})
    }
    if(!user.checkpassword(req.body.email)){
        res.send({message:"wrong email or pass"})
    }

    const token = jwt.sign({user}, process.env.mysecret);

    res.send({user,token})

}


module.exports = {register,login}