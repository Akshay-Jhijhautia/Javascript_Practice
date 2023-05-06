const data = require('./1-arrays-jobs.cjs');

function avg(data){
    let obj = data.reduce((accumulator,currentValue) => {
        if(accumulator[currentValue['location']]){
            accumulator[currentValue['location']] += (+currentValue['salary'].split("$").join(""))
        } else {
            accumulator[currentValue['location']] = (+currentValue['salary'].split("$").join(""))
        }
        return accumulator;
    },{});

    let country = data.reduce((accumulator,currentVAlue)=>{
        if(accumulator[currentVAlue['location']]){
            accumulator[currentVAlue['location']]++;
        } else {
            accumulator[currentVAlue['location']] = 1;
        }
        return accumulator;
    },{})

    let average = Object.keys(country).reduce((accumulator,currentValue)=> {
        let countCountry = country[currentValue];
        let totalSalary = obj[currentValue];
        let ave = totalSalary/countCountry;
        accumulator[currentValue] = ave;
        return accumulator;
    },{})

    return average;
}

console.log(avg(data));