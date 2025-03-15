const pool = require("../db/pool");
const { use } = require("../routes/userRoute");


async function getAlluser(params) {

    const {rows} =  await pool.query("Select * From usernames");

    return rows
    
}

async function insertUsername(username) {

    await pool.query("INSERT INTO  usernames (username) VALUES($1)", [username]);

    console.log("User inserted Successfully into the Db")
    
}

async function getUserNameById(userId)
{
    const {rows} = await pool.query("SELECT * FROM  usernames WHERE id = ($1)", [Number(userId)]);
    return rows[0]


}

module.exports = {getAlluser, insertUsername, getUserNameById}