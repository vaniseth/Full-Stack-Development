const sum = require('./mod.js');
console.log(sum(2,3));

// "./" means in current directory we are importing the mod file. The mod file was exporitng the "add" which was the module. The exported module is now stored in sum and then we are printing the output with the help of mod.js which has a sum function.