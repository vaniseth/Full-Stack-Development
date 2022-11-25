const express = require ('express'); //'express is a third party module i.e it has to be installed 'npm install --save express' any thord party module can be installed like this 
const app = express();

app.use((req,res,next)=>{
    console.log("In the middleware one");
    res.send("<h1> Hello Vaani</h1");
    next();
})

app.use((req,res)=>{
    console.log("In the middleware two");
})

app.listen(3000);