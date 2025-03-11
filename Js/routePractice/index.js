const express = require("express")
const app = express()
const StudentRouter = require("./routes/students")
const PORT = process.env.PORT;
console.log(PORT)
app.use("/students", StudentRouter);
app.listen(PORT,()=>{

console.log("Welcome to 127.0.0.1");
})


