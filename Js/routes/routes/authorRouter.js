
const {Router} = require("express")

const authorRouter = Router()


authorRouter.get("/all", (req, res) =>{

    res.send("All authors")
});

authorRouter.get("/:authorId", (req, res) => {
    res.send(`Author Id ${req.params.authorId}`);
})

module.exports = authorRouter