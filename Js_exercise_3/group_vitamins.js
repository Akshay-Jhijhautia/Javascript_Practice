const data = require('./3-arrays-vitamins.cjs');

function group(data){
    let vitaminData = data.reduce((accumulator,currentValue)=> {
        let v = currentValue['contains'].split(', ')
        for(let index of v){
            if(currentValue['contains'].includes(index)){
                if(accumulator[index]){
                    accumulator[index].push(currentValue['name']);
                } else {
                    accumulator[index] = [currentValue['name']];
                }
            }
        }
        return accumulator;
    },{})

    return vitaminData;
}

console.log(group(data));