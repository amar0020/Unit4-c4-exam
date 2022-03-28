const mongoose = require("mongoose");

const bcrypt = require("bcrypt");


const userSchema = mongoose.Schema({
    firstName:{type:String, required:true},
    lastName:{type:String, required:true},
    email:{type:String, required:true, unique:true},
    password:{type:String, required:true}
},
{
    timestmaps:true
})


userSchema.pre("save", function (next){
    const hashing= bcrypt.hashSync(this.password, 8);

    this.password = hashing
    next()
})

userSchema.methods.checkpassword= (password)=>{
    return bcrypt.compareSync(password, this.password)
}

const User= mongoose.model("user", userSchema)

module.exports= User