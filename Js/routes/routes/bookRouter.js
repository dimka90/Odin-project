
const {Router} = require("express")

const bookRouter = Router()

const books = [
"The zen of Python",
"Head first Python",
"The consensus layer",
" things fall apart"
]
bookRouter.get("/all", (req, res) =>{

    res.send(books)
})

bookRouter.get("/:bookId", (req, res)=>{
    const bookId = req.params.bookId;
    if(books.length< bookId) res.send("Oops Book not available"); res.end;

    res.send(`Book Title: ${books[bookId]}`);
})

module.exports =bookRouter