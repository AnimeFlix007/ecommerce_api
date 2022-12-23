const express = require("express")
const productRouter = require("./routes/productRoutes")

const app = express()

const port = process.env.PORT || 8000

app.get("/", (req, res, next) => {
    res.send("hello")
})

app.use("/api/products", productRouter)

app.listen(port, ()=>{
    console.log(`server is running on ${port}`);
})