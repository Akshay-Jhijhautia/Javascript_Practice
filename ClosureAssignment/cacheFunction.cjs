function cacheFunction(cb) {
    if(typeof cb != 'function'){
        throw new Error("Invalid Arguments");
    }
    let obj = [];
    return function onDemand(...data) {
        let key = JSON.stringify(data)
        if(key in obj){
            return obj[key];
        }else {
            obj[key] = cb(...data)
            return obj[key];
        }
    }
}


module.exports = cacheFunction;