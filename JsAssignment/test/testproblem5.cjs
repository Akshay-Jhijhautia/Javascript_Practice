const problem5 = require('../problem5.cjs');
const car_year = require('./testproblem4.cjs');
const inventory = require('../cars.js');

const ans = problem5(inventory,car_year);
console.log(`Cars made after 2000 are ${ans.length} and their details are -> `);
console.log(ans);
