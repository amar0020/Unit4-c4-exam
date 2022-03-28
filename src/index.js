const express = require("express");

const {register,login}= require("./controller/auth.controller")

const todocontroller = require("./controller/todo.controller")


const app = express()


app.use(express.json());

app.post("/register", register);

app.post("/login", login)

app.use("/todos", todocontroller)





















module.exports = app