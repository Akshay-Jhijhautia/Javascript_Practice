const data = require('./2-arrays-logins.cjs');

function sortF(data){
    data.sort((a,b) => {
        if(a["first_name"] > b["first_name"]){
            return -1;
        } else if(a["first_name"] < b["first_name"]){
            return 1;
        } else {
            return 0;
        }
    })
    return data;
}

console.log(sortF(data));