const data = require('./1-arrays-jobs.cjs');

function sum(data){
    let obj = data.reduce((accumulator, currentValue) => {
        if(accumulator[currentValue['location']]){
            accumulator[currentValue['location']] += (+[currentValue['salary'].split("$").join('')])
        } else {
            accumulator[currentValue['location']] = (+[currentValue['salary'].split("$").join('')])
        }
        return accumulator;
    },{})

    return obj;
}

console.log(sum(data))