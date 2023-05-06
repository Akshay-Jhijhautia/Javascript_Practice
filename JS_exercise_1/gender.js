const data = require('./2-arrays-logins.cjs');

function gender(data) {
    let ogj = data.filter((value) => {
        let regex = /Agender/
        return value['gender'].match(regex);
    })

    return ogj;
}

console.log(gender(data));