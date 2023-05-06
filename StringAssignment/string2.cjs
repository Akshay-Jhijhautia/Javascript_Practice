// Given an IP address - "111.139.161.143". Split it into its component parts 111, 139, 161, 143 and return it in an array in numeric values. [111, 139, 161, 143].

function convert(string){
    let str = string.split(".").map(Number);
    for(let i = 0; i <str.length; i++){
        if(!Number.isInteger(str[i]))
        return [];
    }
    return str;
}

module.exports = convert;