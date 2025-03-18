const {Router} =require("express")
const itemRouter=Router()
const {createItem, getAllItems, getAItemByCategory, createCategory, createBrand}= require("../controllers/userController")


itemRouter.post("/createItem", createItem)
itemRouter.get("/all",getAllItems)
itemRouter.get("/category/:name", getAItemByCategory)
itemRouter.post("/category/:cat", createCategory);
itemRouter.post("/brand/:brand", createBrand)
module.exports=itemRouter

