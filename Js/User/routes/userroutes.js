
const {Router} = require('express')

const {createUser,getAllUsers, getuserById, upDateUserById}= require("../controllers/userController")

const userRouter = Router()



// userRouter.get("/", (req, res)=>{

//     res.send("Home Page");
// })

userRouter.get("/all", getAllUsers)
userRouter.post("/createUser", createUser);
userRouter.get("/getuser/:userId", getuserById)
userRouter.put("/updateUserById/:userId", upDateUserById )
module.exports = userRouter;