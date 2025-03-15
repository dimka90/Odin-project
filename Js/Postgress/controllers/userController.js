

const db = require("../db/queries");
const { use } = require("../routes/userRoute");

async function getAlluser(req, res) {
    try{
        const user = await db.getAlluser();
        // res.send("Usernamesss: " + user.map(user => user.username).join(", "))

        res.status(200).json({
            success: true,
            message: "Successfully retrived all users",
            data:{
                user: user.map(user => user.username).join(",")
            }
        })
    }
    catch (error){

        console.log(error)
    }
}
async function  insertUsername(req, res) {
    const {username} = req.body;
    try {
    const user = await db.insertUsername(username)

    res.status(200).send("UserName inserted successfull");
    console.log("User inserted successfully");
} catch (error) {
    
}    
}
async function getUserNameById(req, res) {
const {userId} = req.params;

const user = await db.getUserNameById(userId)
res.status(200).json(
    {
        success: true,
        message: "User data retrived successfully",
        data : {
            name: user["username"],
            id : user["id"]
        }
    }
)
}


module.exports= {getAlluser, insertUsername,getUserNameById}