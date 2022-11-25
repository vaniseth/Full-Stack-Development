const express = require('express');
const app = express();


app.use("/product", (req,res,next)=>{
    res.send("<form method ='POST' action = '/new-product'> <input type='text' name ='text1'> <input type = 'button' name = 'Click'>");
})

app.use("/new-product", (req,res)=>{
    res.send("From new product");
})

// app.get("/product", (req,res,next)=>{
//     res.send("<form method ='POST' action = '/new-product'> <input type='text' name ='text1'> <input type = 'button' name = 'Click'>");
// })

// app.get("/new-product", (req,res)=>{
//     res.send("From new product");
// })
// we cannot use get here as we are using POST request here. app.use is a general syntax that can take anything get or post. but app.get makes the request of get type so it will not work here we are using POST to send the information.

//app.get("/product", (req,res,next)=>{
//     res.send("<form method ='POST' action = '/new-product'> <input type='text' name ='text1'> <input type = 'button' name = 'Click'>");
// })

// app.post("/new-product", (req,res)=>{
//     res.send("From new product");
// })
// app.post will work here as we are using post request.

app.listen(3000);
