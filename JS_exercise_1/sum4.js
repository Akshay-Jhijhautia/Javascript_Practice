const data = require('./2-arrays-logins.cjs');

function sum(data){
    let summ = data.reduce((accumulator, currentValue) => {
        return accumulator + currentValue['ip_address'].split('.').map(Number)[3];
    },0)

    return summ;
}

console.log(sum(data));