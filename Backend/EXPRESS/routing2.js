const express = require('express');
const app = express();

app.use("/", (req,res,next)=>{
    console.log("default");
    next();
})

app.use("/product", (req,res,next)=>{
    res.send("From Product");
})

app.use("/new-product", (req,res)=>{
    res.send("From new product");
})

app.listen(3000);
