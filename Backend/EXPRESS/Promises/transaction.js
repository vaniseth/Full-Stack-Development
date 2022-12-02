// solving callback hell using promises

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
