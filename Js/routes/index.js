require("dotenv").config()

const express = require("express");
const PORT=process.env.PORT;
const authorRouter = require("./routes/authorRouter");
const bookRouter = require("./routes/bookRouter")
const app = express()
// Router
app.use("/authors", authorRouter);
// Book router
app.use("/books", bookRouter);
app.listen(PORT, () =>{
console.log("Welcome to Blockfue labs");

})
