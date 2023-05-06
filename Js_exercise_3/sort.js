const data = require('./3-arrays-vitamins.cjs');

function sort(data){
    data.sort((a,b)=> {
        return a['contains'].split(',').length - b['contains'].split(',').length
    });

    return data;
}

console.log(sort(data))