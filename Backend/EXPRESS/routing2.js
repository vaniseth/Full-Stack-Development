const express = require('express');
const app = express();

app.use("/", (req,res,next)=>{
    console.log("default");
    next();
})

// default method "/" we cannot use res.send here instead we have to use console.log

app.use("/product", (req,res,next)=>{
    res.send("From Product");
})

app.use("/new-product", (req,res)=>{
    res.send("From new product");
})

app.listen(3000);
