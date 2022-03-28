const mongoose = require("mongoose");


const todoSchema = mongoose.Schema({
    title:{type:String, required:true},
    userId:{type:mongoose.Schema.Types.ObjectId, required:true, ref:"user"}
})


const Todo = mongoose.model("todo", todoSchema)


module.exports= Todo