const { nestedArray } = require('../arrays');
const flatten = require('../flatten.cjs');

let depth = 1;
console.log(flatten(nestedArray,depth));
