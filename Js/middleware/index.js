require("dotenv").config()
const express=require("express")
const app= express()

function middleware1(req, res, next){
console.log("Middleware 1")

next();
}

function middleware2(req,res,next){
console.log("Middleware 2")
}

function middleware3(req, res, next) {

console.log("MiddleWare 3")
}
app.use(middleware1)
app.use(middleware2)
app.use(middleware3)
app.listen(4000, ()=>{

console.log("Welcome 127.0.0.1, i am your second Home");
})
