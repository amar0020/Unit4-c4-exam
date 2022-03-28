const express = require("express");

const router = express.Router()
const authenticate = require("../middleware/authenticate")

const Todo = require("../module/todo.model")


router.get("", authenticate, async(req,res)=>{
    const  todo = await Todo.find().lean.exec()

    res.send(todo)
})

router.post("", authenticate, async (req,res)=>{
    const todo = await Todo.create(req.body)

    res.send(todo)
})


router.get("/:id", authenticate, async (req,res)=>{
    if(req.body.userId==req.params.id){
        const todo= await Todo.findById(req.params.id)
        res.send(todo)
    }
    else{
        res.status(401).send("not authoroxe")
    }
})

router.get("/:id", authenticate, async (req,res)=>{
    if(req.body.userId==req.params.id){
        const todo= await Todo.findByIdAndUpdate(req.params.id,{req,body},{})
        res.send(todo)
    }
    else{
        res.status(401).send("not authoroxe")
    }
})

module.exports = router