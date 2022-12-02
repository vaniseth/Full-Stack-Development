function transact(title){
    return new Promise((resolve, reject)=>{

        let random = Math.floor(Math.random()*100);
        if(title.toUpperCase() != title)
            reject("Not in Uppercae");
        setTimeout(() => {
           resolve(title) 
        }, random);
    })
} 


transact("DEALER")
.then((resolved)=>{
    console.log(resolved+"performs transaction");
    return transact("WHOLESALER");
})
.then((resolved)=>{
    console.log(resolved+"performs transaction");
})
.catch((rejected)=>{
    console.log(rejected+"performs transaction");
})

// there is no need to handle mutiliple times using promises and we can avoid the problem of callback hell.