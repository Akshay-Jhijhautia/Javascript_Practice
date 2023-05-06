let test;
function problem1(inventory,carId){
    if(inventory === undefined || inventory.length === 0 || carId === undefined || !Number.isInteger(carId) || !Array.isArray(inventory)){
        return [];
    }

    for(let carSearch = 0; carSearch < inventory.length; carSearch++){
        if(inventory[carSearch].id === carId){
            return inventory[carSearch];
        }
    }
}


module.exports = problem1;
