// creating a server

const http=require('http'); 
//Question in exam: from the given line of code which is global or core module. 
//importing module - here const is a global module and http is an identifier/variable, require('http') is the core module if it was not then we had to install it using npm, also require is a fucntion here, any keyword after which we put parenthesis is always a function.

const server=http.createServer((req, res)=>{
    console.log("Hello, Vaani");
    res.write("<html><h1>Have a good day</h1></html>");
}).listen(3000);

//We have created a method then we have to pass a call back function in createServer()
//we have used listen and added port no. 3000 to this listen request. Listen will always try to hear if there are any requests coming to the port 3000. 
//3000 is an open TCP port, now if any client sends a request to this port 3000, it will be directed here.
//res is response and req is request.