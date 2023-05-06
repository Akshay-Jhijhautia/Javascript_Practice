const {items} = require('../arrays');
const each = require('../each.cjs');

each(items,function cb(index) {
    console.log(index);
})