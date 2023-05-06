/*
    Create a function for each problem in a file called
        counterFactory.js
        limitFunctionCallCount.js
        cacheFunction.js
    and so on in the root of the project.
    
    Ensure that the functions in each file is exported and tested in its own file called
        testCounterFactory.js
        testLimitFunctionCallCount.js
        testCacheFunction.js
    and so on in a folder called test.

    Create a new git repo on gitlab for this project, ensure that you commit after you complete each problem in the project. 
    Ensure that the repo is a public repo.

    When you are done, send the gitlab url to your mentor
*/

function counterFactory() {
    // Return an object that has two methods called `increment` and `decrement`.
    // `increment` should increment a counter variable in closure scope and return it.
    // `decrement` should decrement the counter variable and return it.
}

function limitFunctionCallCount(cb, n) {
    // Should return a function that invokes `cb`.
    // The returned function should only allow `cb` to be invoked `n` times.
    // Returning null is acceptable if cb can't be returned
}

function cacheFunction(cb) {
    // Should return a function that invokes `cb`.
    // A cache (object) should be kept in closure scope.
    // The cache should keep track of all arguments have been used to invoke this function.
    // If the returned function is invoked with arguments that it has already seen
    // then it should return the cached result and not invoke `cb` again.
    // `cb` should only ever be invoked once for a given set of arguments.
}