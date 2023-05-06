const problem1 = require('../problem1.cjs');
const inventory = require('../cars.js');

const result = problem1(inventory,1);

let id = result.id;
let year = result.car_year;
let make = result.car_make;
let model = result.car_model;

console.log(`Car ${id} is a ${year} ${make} ${model}`);
