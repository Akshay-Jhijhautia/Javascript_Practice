const data = require('./2-arrays-logins.cjs');

function split(data){
    let d = data.map((value)=> {
        return value['ip_address'].split('.').map(Number);
    })

    return d;
}

console.log(split(data));
