# Middlewares

Express is a third party module so we have to install it manually.

Express works on middlewares.

```
const express = require ('express');
const app = express();

app.use((req,res,next)=>{
    console.log("In the middleware one");
    next();
})

app.use((req,res)=>{
    console.log("In the middleware two");
})

app.listen(3000);
```

Once the program is executed output will be:

![1669182517937](image/README/1669182517937.png)

---

```
res.send("Hello Vaani");
```

If we need to send something to the client we use the response object.

If the client sends some request how to interpret it?

# Module

Module is a genreric term, it can be a class, set of classes, a package or single fuction. **Module is an independent unit**.

There should be minimum interlinlking between two modules.

# Body Parsing

"Get request" gets the informatino in the form of URL. Also get is the default method that the browser uses.

"Post request" gets the information in the form of body.

* To keep the information private we will never use a get requestas it sends in the form of a URL. So we use a post resuqest as it sends the request in the form of body.
* Also while using get request the information is in the form of the URL  and there is a limit to the length of the URL but while using a post reuqest as the information is in the form of the body, there is no limit to the length of content.

Q. Make a form to get the gender, age address, and sexual orientation of an individual. Here address and sexual orientation is a private infomation so we need post request not get request as we don't need that the private information to be presented in the form of URL and instead in the body.

Q. Make an application where fetch the user details in the type of a form and from that form use setInterval/setTimeout to start a backward clock to predict the death date.

Q. Regular expressions in T3. Express server (imp), routing, filtering, get-post, body-parsing.
