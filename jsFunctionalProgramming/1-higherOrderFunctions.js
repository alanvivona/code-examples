
var triple = function(x){
	return x * 3;
}

// Higher order function
var operate = function(n,factor){
	return n + 1 + factor(n);
}

var numbers = [1,2,13,12,14,23,25,46,57,25,58,6,69,69,76,54,0,1,345];
console.log('numbers', numbers);

// map, filter, reduce == higher order functions
var results = numbers.map(function(n){ return operate(n, triple); });
console.log('results', results);

var greatherThan = function(n,min) {
	return n > min;
}

results = results.filter(function(n){
	return greatherThan(n, 50);
})
