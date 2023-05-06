
function problem2(inventory,lastcar){
    if(inventory === undefined || lastcar === undefined || inventory.length === 0){
        return;
    }
    let last = inventory[lastcar];
    let make = last.car_make;
    let model = last.car_model;
    return `Last car is a ${make} ${model}`;
}



module.exports = problem2;

