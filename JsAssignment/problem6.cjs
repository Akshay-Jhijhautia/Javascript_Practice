let specific_cars = [];
let incrementCars = 0;

function problem6(cars){
    if(cars === undefined || cars.length === 0){
        return;
    }
    for(let specificCars = 0; specificCars< cars.length; specificCars++){
        if(cars[specificCars].car_make === 'Audi' || cars[specificCars].car_make === 'BMW'){
            specific_cars[incrementCars] = cars[specificCars];
            incrementCars++;
        }
    }
    return specific_cars;
}

module.exports = problem6;