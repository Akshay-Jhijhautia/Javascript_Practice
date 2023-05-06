const data = require('./1-arrays-jobs.cjs');


function dev(data) {
    let regex = /Web Developer/
    let obj = data.filter((value) => {
        return value['job'].match(regex)
    })

    return obj;
}

console.log(dev(data));