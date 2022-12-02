//COUNTER DILEMMMA PROBLEM

//counter the number of times a function has been called.

// let x=0; here it is global so anyone can manipulate the count so we can make x a private variable

var result = (function(){
    let x=0;
    function inner(){
        x++;
        return x;
    }
    return inner; //returns the reference if the inner function.
})();

// Sol of Counter Dilemma: we have used closure property to access a private variable. Along with closure we have also made the fucntion a self-invoking function.
// this also a way to make a variable priavte in JavaScript. (INTERVIEW QUESTION) 
// ans: using closure property we can make a variable private in JS.

result(); //it stores the refernce of the inner function
result();
console.log(result());
