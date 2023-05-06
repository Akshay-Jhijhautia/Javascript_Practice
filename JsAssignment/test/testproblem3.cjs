const inventory = require('../cars');
const problem3 = require('../problem3.cjs');

const result = problem3(inventory);

for(let carModel = 0; carModel < result.length; carModel++){
    console.log(result[carModel].car_model);
}