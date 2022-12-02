// we are adding some randomness/asynchronousuty.
// we are doing so as any transaction can happen first lets say RBI is doing some transactions so any transaction can take place first so we make the code asynchronous

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
    else
        console.log("DEALER has done the transaction");
})

transact("WHOLESALER",(err)=>{
    if(err)
        console.log(err);
    else
        console.log("WHOLESALER has done the transaction");
})
// console.log(Math.floor(Math.random()*100)); //this will generate any random number