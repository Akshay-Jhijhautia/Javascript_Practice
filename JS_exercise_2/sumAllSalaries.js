const data = require('./1-arrays-jobs.cjs');

function sum(data){
    let obj = data.reduce((accumulator,currentValue) => {
        return accumulator + (+currentValue['salary'].split('$').join(''))
    },0);

    return obj;
}

console.log(sum(data))