const mapObject = require('../mapObject.cjs');

const object = {
    start : 5,
    end : 7
}


function obj(object,cb){
    for(let i in object){
        cb(i) 
    }
}

obj(object, function callback(key){
    object[key] += 5;
});

console.log(object);