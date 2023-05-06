function flatten(elements,depth) {
    const flat_array = [];
    function helper(array, d){
        let counter = 0;
        while(counter < array.length){
            const val = array[counter];
            if(Array.isArray(val) && d){
                helper(val, d - 1);
            } else if(val === undefined){
                counter++;
                continue;
            }
            else{
                flat_array.push(val);
            }
            counter++;
        }
    };
    helper(elements,depth);
    return flat_array;
}

module.exports = flatten;

