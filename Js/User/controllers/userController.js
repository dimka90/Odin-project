
const  {User, users} = require("../models/userModel");
const { use } = require("../routes/userroutes");


function  getAllUsers(req, res){
    res.status(200).json(
        users
    )
}
function  createUser(req, res){

    const {name, email, age} = req.body;

    if(!name || !email|| !age){
        return res.status(400).send( " All field can't be empty")
    }
    const newUser = User.createuser(name, email, age);

    if(!newUser){
        res.send("Unable to create user");
    }



    res.status(201).json(newUser
    
    );
} 

function getuserById(req, res) {

    const {userId} = req.params;

    if(!userId) return res.status(404).send(" Id not found");
    
    if( userId > users.length){

        return res.status(403).send("Error")
    }

    const result = User.getUserById(userId)

    res.status(200).json(result)
    }

    function upDateUserById(req, res) {
        const {userId} = req.params;
        const {name, email, age} = req.body;

        if(!userId) return res.status(404).send(" Id not found");
        
        if( userId >=users.length || userId < 0 || isNaN(userId)) {
    
            return res.status(403).send("Out of range or invalid num")
        }
        const result = User.getUserById(userId)

        if (!result){
            return res.status(404).send("user does not exist")
        }
        if( name)result.name =name
        if (email)result.email = email
        if (age)result.age=  age
        res.status(200).json(result)
        }

module.exports = {createUser, getAllUsers, getuserById, upDateUserById};