function limitFunctionCallCount(cb, n) {

    if(typeof cb != 'function' || typeof n != 'number'){
        throw new Error("Invalid Arguments");
    }
    let num = n;
    return function onDemand(...a){
        if(num > 0){
            num --;
            return cb(...a);
        }
        else {
            return null;
        }
    }
}



module.exports = limitFunctionCallCount;

