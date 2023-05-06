const cacheFunction = require('../cacheFunction.cjs');


let demandFunction = cacheFunction(function callback(num){
    try {
        console.log("again");
        return num;
    } catch (error) {
        console.log(error);   
    }
})


console.log(demandFunction(1));
console.log(demandFunction(2));
console.log(demandFunction(2));
console.log(demandFunction(3));
console.log(demandFunction(1));