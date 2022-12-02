// Now the first the dealer will sell it to the wholesaler and then only it will sell the items further. so we need to maintain the order of the callback, i.e., dealer should come first only then wholesaler will come.
// To define the order of the transactions that are happening we will perform callback chaining.

let err; 

function transact(title, callback){
    let random = Math.floor(Math.random()*100);
    if(title.toUpperCase() != title)
        err = new Error("Not in Uppercae");
    setTimeout(() => {
       callback(err) 
    }, random);
} 

transact("DEALER",(err)=>{
    if(err)
        console.log(err);
    else{
        console.log("DEALER has done the transaction");
        transact("WHOLESALER",(err)=>{
            if(err)
                console.log(err);
            else
                console.log("WHOLESALER has done the transaction");
        })
    }
})

