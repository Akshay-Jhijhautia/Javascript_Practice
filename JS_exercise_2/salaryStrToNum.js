const data = require('./1-arrays-jobs.cjs');

function num(data){
    data.map((value) => {
        return value['salary'] = +value['salary'].split('$').join('');
    })

    return data;
}

console.log(num(data));