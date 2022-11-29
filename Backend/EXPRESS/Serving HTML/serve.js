//serving HTML files

const express = require("express");
const app = express();
const path = require('path');

app.use('/', (req,res,next)=>{
    // res.send("<html><h1>Hello</h1><body><form><input type = 'text' name = 'txt'> </form></body></html>");
    res.sendFile(path.join(__dirname,"my.html"));
    //__dirname is a global variable that stores the working directory's path.

    //if we use send method then we have to write the whole html file as a paramater argument.
    // serving Html file- we use sendFile method to add external HTML file to the js.
})

app.listen(3000);