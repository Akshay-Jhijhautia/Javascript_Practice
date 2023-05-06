const { items } = require('../arrays');
const map = require('../map.cjs');



const result = map(items, val => val * 2);

console.log(result);

