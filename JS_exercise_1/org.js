const data = require('./2-arrays-logins.cjs');

function org(data){
    let regex = /.org/;
    let obj = data.filter((value) => {
        return value['email'].match(regex);
    })
    return obj;    
}

console.log(org(data));