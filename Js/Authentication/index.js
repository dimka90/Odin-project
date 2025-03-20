require("dotenv").config()
const express=require("express")
const userRouter = require("./routes/userRoute")
const app = express()
const PORT = process.env.PORT

app.use(express.json())
app.use("/user", userRouter)
app.get("/", (req, res)=>{

    res.send("index home");
})
console.log(PORT)
app.listen(PORT, ()=>{
console.log("Welcome to 127.0.0.1")
})