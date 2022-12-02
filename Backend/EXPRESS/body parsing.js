const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser,urlencoded({extended: false}));

app.get("/product", (req,res,next)=>{
    res.send("<form method ='POST' action = '/new-product'> <input type='text' name ='text1'> <input type = 'button' name = 'click'></form>");
})

app.post("/new-product", (req,res)=>{
    console.log(req.body);
    // console.log(req.body.text1); use any one req.body or req.body.text1
    res.send("From new product");
})

app.listen(3000);