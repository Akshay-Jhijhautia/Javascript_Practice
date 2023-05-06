const inventory = require('../cars');
const problem6 = require('../problem6.cjs');

const result = problem6(inventory);

console.log('In JSON format \n', JSON.stringify(result));