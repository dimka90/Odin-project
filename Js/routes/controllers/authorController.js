const db = require("../routes/db")


async function getAuthorById(req, res){
    const {authorId} = req.params;
    const author =await db.getAuthorById(Number(authorId));

    if(!author){

        res.status(400).send("Author not Found")
    }

    res.status(200).json({
        message: `${author.name}`
    });

}

module.exports = {getAuthorById}