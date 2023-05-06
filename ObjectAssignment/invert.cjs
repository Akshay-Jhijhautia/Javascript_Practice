let temp = {};

function invert(obj) {
    for(let key in obj){
        temp[obj[key]] = key;
    }
    return temp;
}

module.exports = invert