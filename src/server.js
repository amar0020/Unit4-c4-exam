
const app= require("./index")

const connect= require("./config/db")




app.listen(3456, async ()=>{
    await connect()
    console.log("listening")

})