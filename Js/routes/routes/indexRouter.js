const {Router}=require("express")


const indexRouter = Router()

indexRouter.get("/", (res, req)=>{
    req.send("Welcome  to 127.0.0.1");
})

module.exports = indexRouter