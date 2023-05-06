function filter(elements, cb) {
    let array = [];
    for(let index = 0; index< elements.length; index++){
        if(cb(elements[index],index, elements) === true){
            array.push(elements[index]);
        }
    }
    return array;
}


module.exports = filter;