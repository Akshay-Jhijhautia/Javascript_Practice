const data = require('./1-arrays-jobs.cjs');

function correct(data){
    data.map((value)=> {
        return value['correct'] = (+value['salary'].split('$').join('')) * 10000; 
    })
    return data;
}

console.log(correct(data));