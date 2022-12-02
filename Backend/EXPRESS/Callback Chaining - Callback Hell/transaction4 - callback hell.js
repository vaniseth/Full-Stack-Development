// when we chain a callback to another callback (inside another callback) we see a pyramid like structure we call it "CALLBACK HELL" or "PYRAMID OF DOOM".
// we generally should avaoid the situation of callback hell as it is not feasible, the solution to this problem of callback hell is "PROMISES".

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
            else{
                console.log("WHOLESALER has done the transaction");
                transact("RETAILER",(err)=>{
                    if(err)
                        console.log(err);
                    else
                        console.log("RETAILER has done the transaction");
                })
            }
        }) 
    }
})

// here from line 15 - line 33 we see a pyramid like structure this is callback hell.
// prgrams like these is not maintable and the code is complex.
