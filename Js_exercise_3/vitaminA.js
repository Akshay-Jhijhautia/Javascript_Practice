const data = require('./3-arrays-vitamins.cjs');

function vitaminC(data){
    let vitamin = data.filter((value) => {
        let regex = /Vitamin A/;
        return value['contains'].match(regex);
    })

    return vitamin;
}

console.log(vitaminC(data));