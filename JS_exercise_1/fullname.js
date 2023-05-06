const data = require('./2-arrays-logins.cjs');

function fullName(data){
    data.map((value) => {
        return value['fullname'] = `${value['first_name']} ${value['last_name']}`
    })

    return data;
}

console.log(fullName(data));