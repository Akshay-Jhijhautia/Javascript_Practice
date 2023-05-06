function map(elements, cb){
    const array = [];
    for(let index = 0; index < elements.length; index++){
        array.push(cb(elements[index],index,elements));
    }
    return array;
}







module.exports = map;