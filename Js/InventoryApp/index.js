require("dotenv").config()
const express=require("express")
const app = express()
const itemRouter = require("./routes/userRoutes")
const PORT= process.env.PORT || 3000
app.use(express.json())
app.use("/items",itemRouter)
app.listen(PORT, ()=>{

    console.log("Welcome to 127.0.0.1");
})