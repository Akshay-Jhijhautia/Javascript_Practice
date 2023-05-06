let model = [];

function problem4(cars){
    if(cars === undefined || cars.length === 0){
        return;
    }
    for(let carYear = 0; carYear < cars.length; carYear++){
        model[carYear] = cars[carYear].car_year;
    }
    return model;
}


module.exports = problem4;

