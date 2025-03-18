const {Router} =require("express")
const itemRouter=Router()
const {createItem, getAllItems, getAItemByCategory} = require("../controllers/userController")


itemRouter.post("/createItem", createItem)
itemRouter.get("/all",getAllItems)
itemRouter.get("/category/:name", getAItemByCategory)

module.exports=itemRouter

