function problem3(cars){
    if(cars === undefined || cars.length === 0){
        return;
    }
    cars.sort((a,b) => {
        if (a.car_model < b.car_model)
        return -1;
        else if(a.car_model > b.car_model)
        return 1;
        else
        return 0;
    });
    return cars;
}



module.exports = problem3;