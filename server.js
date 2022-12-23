const express = require("express")

const app = express()

const port = process.env.PORT || 8000

app.get("/", (req, res, next) => {
    res.send("hello")
})

app.listen(port, ()=>{
    console.log(`server is running on ${port}`);
})