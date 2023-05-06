const { items } = require('../arrays.js');
const find = require('../find.cjs');

let search = 2;

const result = find(search, items, function callback(element) {
     if(search === element){
        return true;
    }
    else{
        return false;
    }
});

console.log(result);
