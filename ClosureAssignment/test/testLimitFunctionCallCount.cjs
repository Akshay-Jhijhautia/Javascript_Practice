const limitFunctionCallCount = require('../limitFunctionCallCount.cjs');

let n = 2;
const demand = limitFunctionCallCount((...a) => {
    try {
        console.log(a);
    } catch (error) {
        console.log(error);
    }
},n);

let a = [1,2,3];
demand(...a);
demand(...a);
demand(...a);
