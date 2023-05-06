const problem2 = require('../problem2.cjs');
const inventory = require('../cars.js');


let lastcar = inventory.length - 1;
const result = problem2(inventory,lastcar);
console.log(result);