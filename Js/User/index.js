require("dotenv").config()
const express = require("express")
const userRouter = require("./routes/userroutes")
const app = express();
const PORT= process.env.PORT || 3000;
app.use(express.json())
app.use("/users", userRouter);


app.listen(PORT, ()=>{
console.log("Welcome to 127.0.0.1");
});
