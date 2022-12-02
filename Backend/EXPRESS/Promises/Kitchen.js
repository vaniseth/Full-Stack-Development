// if you clean the kitchen your mom promises an ice cream.
// promises occurs in 3 stages: resolved, rejection and pending.
// 1st state: promise resolved if we get the ice cream
// 2nd state: promise turned into rejection if we don't get the ice cream
// 3rd state: pending state
// we use promises to counter the problem of callback hell

let cleanKitchen = new Promise((resolve, reject)=>{
    let isCLean = false;
    if (isCLean)
        resolve("Kitchen is clean");
    else
        reject("Kitchen unclean");
}) 
// Promise is a constructor of the promise object, it takes a callback function as an argument
// callback function now takes 2 arguments
// this is how a promise is made.
// here reject means an error is thrown, thus catch function will be called. (EXCEPTION HANDELING)

cleanKitchen
.then((resolved)=>{
    console.log(resolved+"You will get an ice cream");
})

.catch((rejected)=>{
    console.log(rejected+"You will not get an ice cream");
})

// then takes callback function as it's argument and we make callback function like ()=>{}
// catch will be called when the program is rejected.

// This program will give the output as : Kitchen unclean and you will not get an ice cream as isClean() is false.