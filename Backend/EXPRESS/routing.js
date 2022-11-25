const express = require('express');
const app = express();

app.use("/", (req,res,next)=>{
    console.log("Started");
    next();
})

app.use("/product", (req,res)=>{
    console.log("Inside Product");
})

//here there are two middlewares 1. app.use("/") 2. app.use("/product")

app.listen(3000);

// First middleware is running but the second one is not running. For the second one to run we need to enter a product. This is called Routing.
// to ge the second middleware need to enter localhost:3000/product