function each(elements, cb){
    for(let ele = 0; ele< elements.length; ele++){
        cb(elements[ele]);
    }
}

module.exports = each;

