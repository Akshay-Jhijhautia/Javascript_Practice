let newer = 0;
let older = [];
let countCars = 0;

function problem5(inventory,result){
    if(inventory === undefined || result === undefined || inventory.length === 0){
        return;
    }
    for(let searchCars = 0; searchCars<result.length; searchCars++){
        if(result[searchCars] < 2000){
            newer++;
        }
        else{
            older[countCars] = result[searchCars];
            countCars++;
        }
    }
    console.log(`And Cars made before 2000 are ${newer}`);
    return older;
}


module.exports = problem5;