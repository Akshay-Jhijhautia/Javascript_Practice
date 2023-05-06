const { items } = require('../arrays');
const filter = require('../filter.cjs');

const result = filter(items, val => {
    if(val % 2 === 0){
        return true;
    }
});

console.log(result);