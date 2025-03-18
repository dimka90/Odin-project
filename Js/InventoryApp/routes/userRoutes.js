const {Router} =require("express")
const itemRouter=Router()
const createItem = require("../controllers/userController")


itemRouter.post("/createItem", createItem)


module.exports=itemRouter

