let err; //for error - we wil store the error object

function transact(title, callback){
    if(title.toUpperCase() != title)
        err = new Error("Not in Uppercae");
    callback(err);
} 
//title - dealer, retailer, wholeseller etc
//transcation is valid only when the title should be all in uppercap (requiremnt 1) - we can use to toUpperCase to check if the title is in all uppercase.

transact("DEALER",(err)=>{
    if(err)
        console.log(err);
    else
        console.log("DEALER has done the transaction");
})
// this will show the message DEALER has done the transaction.

// transact("dealer",(err)=>{
//     if(err)
//         console.log(err);
//     else
//         console.log("DEALER has done the transaction");
// })
// this code snippet will show an error as dealer is not in the uppercase and it was a requirement.

transact("WHOLESALER",(err)=>{
    if(err)
        console.log(err);
    else
        console.log("WHOLESALER has done the transaction");
})
//both the messges will be shown i.e., DEALER has done transaction and WHOLESALER has done transaction.
