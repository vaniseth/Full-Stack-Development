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

## Module

Module is a genreric term, it can be a class, set of classes, a package or single fuction. **Module is an independent unit**.

There should be minimum interlinlking between two modules.
