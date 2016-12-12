
// Simple example
var dragon = function(name){
	return function(size){
		return function(element){
			return name + ' is a ' + size + ' dragon that breathes ' + element + ' !';
		}
	}
}

console.log(dragon('pepe')('large')('fire'));
// pepe is a large dragon that breathes fire !

var largePepe = dragon('pepe')('large');

console.log('largePepe - ice: ', largePepe('ice'));

console.log('largePepe - quasar: ', largePepe('quasars'));