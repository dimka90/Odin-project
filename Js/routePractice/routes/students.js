require("dotenv").config()
const {Router} = require("express")
const getStudentById = require("../controllers/studentController")
const StudentRouter= Router()

StudentRouter.get("/", (req,res) =>{

    res.send("Home page");
})
StudentRouter.get("/index",(req, res)=>{
res.send("Welcome to school")
});

StudentRouter.get("/:studentId", getStudentById)

module.exports = StudentRouter