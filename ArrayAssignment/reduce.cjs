let index = 0;
function reduce(elements, cb, startingValue){
    if(startingValue === undefined){
        startingValue = elements[0];
        index = 1;
    }
    for(index; index < elements.length; index++){
        startingValue = cb(startingValue,elements[index],index, elements);
    }
    return startingValue;
}

module.exports = reduce;
