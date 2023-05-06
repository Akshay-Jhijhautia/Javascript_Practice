function counterFactory() {
    // Return an object that has two methods called `increment` and `decrement`.
    // `increment` should increment a counter variable in closure scope and return it.
    // `decrement` should decrement the counter variable and return it.
    let counterVal = 0;
    let counter = {
        increment : function(){
            return ++counterVal;
        },
        decrement : function(){
            return --counterVal;
        }
    }
    return counter;
}


module.exports = counterFactory;

//Your counterFactory implementation returned an invalid value when the increment 
//or decrement function was executed. 
//Please ensure that your code is well tested before getting it checked.