const {Router} = require("express")
const {getAlluser, insertUsername,getUserNameById}= require("../controllers/userController")
const userRouter = Router()
userRouter.get("/",getAlluser)
userRouter.get("/:userId", getUserNameById)
userRouter.post("/new", insertUsername)

module.exports = userRouter;