const db = require("../db/pool")

async function createuserQuery(username, password) {
    try {

        const {rows} = await db.query("INSERT INTO users (username,password) VALUES($1,$2) RETURNING *", [username,password])
        
        if (!rows.length){
    
            throw new Error("Error: Failed to insert Data")
        }
        
        return rows
    } catch (error) {
        
        throw error
    }
    
   
}


module.exports = {createuserQuery}