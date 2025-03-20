
const {Router} = require("express")
const userRouter = Router()
const {createUser} = require("../controllers/userController")


userRouter.post("/createuser", createUser )


module.exports = userRouter