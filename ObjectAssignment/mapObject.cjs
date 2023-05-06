function mapObject(obj, cb) {
    for(let i in obj){
        cb(obj[i]);
    }
}

module.exports = mapObject;