const { items } = require('../arrays');
const reduce = require('../reduce.cjs');

const result = reduce(items, (accumulator,currentValue) => accumulator * currentValue)


console.log(result);
