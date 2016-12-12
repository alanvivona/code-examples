
// Simple example
let dragon = (name) => (size) => (element) => name + ' is a ' + size + ' dragon that breathes ' + element + ' !'

console.log(dragon('pepe')('large')('fire'));
// pepe is a large dragon that breathes fire !

let largePepe = dragon('pepe')('large');

console.log('largePepe - ice: ', largePepe('ice'));

console.log('largePepe - quasar: ', largePepe('quasars'));