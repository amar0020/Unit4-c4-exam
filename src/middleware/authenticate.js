

const jwt = require("jsonwebtoken")
require('dotenv').config()



const authenticate= (req,res,next)=>{
        
        
        
    if(!req.headers.authorization){
        req.send("user not login")
    }
    if(!req.headers.authorization.startsWith("Bearer")){
        res.send("user not login")
    }

    const token = req.headers.authorization.trim().split(" ")[1]


    decoded = jwt.verify(token, proces.env.mysecret)


    req.body.userId= decoded._id

    next();

}

module.exports = authenticate
