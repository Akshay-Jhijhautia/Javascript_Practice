let key = [];

function keys(obj) {
    for(let i in obj){
        key.push(i);
    }
    return key;
}

module.exports = keys;