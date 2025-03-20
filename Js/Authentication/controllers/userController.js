
const {createuserQuery} = require("../db/quries")
const bcrypt = require("bcryptjs")

async function createUser(req, res) {

    const {username, password} = req.body;
    try {
        
        if (!username || !password){

            return res.status(401).json(
                {
                    status: true,
                    message: " Username or Password can't be empty"
                }
            )
        }
        const hashed_password = await bcrypt.hash(password, 10);

        const rows = await createuserQuery(username, hashed_password);
        if (!rows.length){
           return  res.status(401).json(
                {
                    status: true,
                    message: " Coud not creae User"
                }
            )
        }

       return res.status(200).json({
            status: true,
            message: "User successfully created",
            data: rows
        })
    } catch (error) {
        
       return res.status(400).json({
            status: false,
            message: error.message
        })
    }
   
    
}

module.exports = {createUser}