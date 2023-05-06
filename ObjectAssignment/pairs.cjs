let properties = [];
function pairs(obj){
    for(const key in obj){
        let array = [];
        array.push(key,obj[key]);
        properties.push(array);
    }
    return properties;
}

module.exports = pairs;