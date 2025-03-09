require("dotenv").config()

const express = require("express");
const PORT=process.env.PORT;
const authorRouter = require("./routes/authorRouter");
const bookRouter = require("./routes/bookRouter")
const indexRouter = require("./routes/indexRouter")
const app = express()
// Router
app.use("/authors", authorRouter);
// Book router
app.use("/books", bookRouter);
app.use("/", indexRouter)

app.use((req, res,next)=>{
    console.log("I am invincible");
    next();
})
app.listen(PORT, () =>{
console.log("Welcome to Blockfue labs");

})
