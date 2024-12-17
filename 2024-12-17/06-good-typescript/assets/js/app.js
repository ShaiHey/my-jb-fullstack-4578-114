// Bad 1
var x = 1;
var y = 2;
// x = "1";
var z = "Hello ";
var t = "World";
var result = z + t;
console.log(result);
console.log("Bla");
console.log(x + y);
// Bad 2
function sum(a, b) {
    return a + b;
}
// sum = "x";
// console.log(sum("2", 3));
console.log(sum(2, 3));
// Bad 3
function multiply(a, b) {
    var result = a * b;
    return result;
}
console.log(multiply(2, 3));
