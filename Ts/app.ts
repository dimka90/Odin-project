import express, {Request, Response} from "express";

const app= express()
app.get("/", (req:Request , res: Response ) => {

res.send("coding is fun")
})

app.listen(4000, () =>{

console.log("Welcome to 127.0.0.1")

})
