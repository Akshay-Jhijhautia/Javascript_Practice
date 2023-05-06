let objectValues = []
function values(obj){
    for(let value in obj){
        objectValues.push(obj[value]);
    }
    return objectValues;
}

module.exports = values;