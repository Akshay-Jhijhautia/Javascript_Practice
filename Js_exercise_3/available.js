const data = require('./3-arrays-vitamins.cjs');

function available(data){
    let obj = data.filter((value) => {
        return value['available'] === true;
    });

    return obj;
}

console.log(available(data));