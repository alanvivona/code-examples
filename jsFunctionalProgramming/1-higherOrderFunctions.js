
let triple = (x) => x * 3

// Higher order function
let operate = (n,factor) => n + 1 + factor(n)

let numbers = [1,2,13,12,14,23,25,46,57,25,58,6,69,69,76,54,0,1,345]
console.log('numbers', numbers)

// map, filter, reduce == higher order functions
let results = numbers.map( (n) => operate(n, triple) )
console.log('results', results)

let greatherThan = (n,min) => n > min

results = results.filter( (n) => greatherThan(n, 250) )
