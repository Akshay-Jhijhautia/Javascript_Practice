const data = require('./2-arrays-logins.cjs');


function mail(data){
    let arr = ['.org','au','.com'];

    let obj;
    let a = [];
    for(let index of arr){
        obj = data.reduce((accumulator, currentValue) => {
            if(currentValue['email'].includes(index)){
                accumulator[index]++;
            } else {
                accumulator[index] = 1;
            }
            return accumulator;
        },{})
        a.push(obj);
    }
    return a;
}

console.log(mail(data));