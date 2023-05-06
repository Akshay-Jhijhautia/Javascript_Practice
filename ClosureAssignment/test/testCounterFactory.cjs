const counterFactory  = require('../counterFactory.cjs');

let counterMethods = counterFactory();

console.log(counterMethods.increment(),counterMethods.decrement());