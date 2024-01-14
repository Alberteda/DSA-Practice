/* Function to remove duplicates */



const removeDuplicates = function(nums) {
    let uniqueElementIndex = 0
    let nextUniqueElementIndex = 1
    
    for(let j=nextUniqueElementIndex; j < nums.length(); nextUniqueElementIndex++ ) {
        if(nums[uniqueElementIndex] === nums[nextUniqueElementIndex]) {
            nextUniqueElementIndex++
        } else{
            uniqueElementIndex++
            nums[uniqueElementIndex] = nums[nextUniqueElementIndex]
        }
    }
};

/* 
    Function Composition 

    Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions.

    The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).

    The function composition of an empty list of functions is the identity function f(x) = x.

    You may assume each function in the array accepts one integer as input and returns one integer as output.
*/

var compose = function(functions) {
    
    return function(x) {
        if (functions.length === 0) return x
        
        functions.reverse().forEach((fn) => {
            x = fn(x)
        })

        return x
    }
};

/* 
    In the solution above we reverse the functions array,
    then for each function in the function array, store that in X
 */



/* 
    Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.

    The first time the returned function is called, it should return the same result as fn.
    Every subsequent time it is called, it should return undefined.
    

    Example 1:

    Input: fn = (a,b,c) => (a + b + c), calls = [[1,2,3],[2,3,6]]
    Output: [{"calls":1,"value":6}]
    Explanation:
    const onceFn = once(fn);
    onceFn(1, 2, 3); // 6
    onceFn(2, 3, 6); // undefined, fn was not called
    Example 2:

    Input: fn = (a,b,c) => (a * b * c), calls = [[5,7,4],[2,3,6],[4,6,8]]
    Output: [{"calls":1,"value":140}]
    Explanation:
    const onceFn = once(fn);
    onceFn(5, 7, 4); // 140
    onceFn(2, 3, 6); // undefined, fn was not called
    onceFn(4, 6, 8); // undefined, fn was not called
*/

var once = function(fn) {
    let functionCallTracker = 0

    return function(...args){
        if (functionCallTracker > 0) {
            return undefined
        }

        functionCallTracker++

        return fn(...args)
    }
};

/**
 * This problem is basically saying ensure that the function paremeter is only called once 
 * Attach a tracker called the functionCallTracker
 * if the function tracker is greater than 0, return undefined, meaning the function has been called before 
 * Else increment functionCallTracker and return the function call.
 */