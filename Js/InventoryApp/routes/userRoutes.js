const {Router} =require("express")
const itemRouter=Router()
const {createItem, getAllItems} = require("../controllers/userController")


itemRouter.post("/createItem", createItem)
itemRouter.get("/all",getAllItems)


module.exports=itemRouter

