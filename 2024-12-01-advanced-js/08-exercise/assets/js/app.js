// Exercise 1 - no params, single command

function doSomething(callback) {
    callback();
}

// inline function
doSomething(function seyHello() {
    console.log("Hello");
});

// anonymous function
doSomething(function () {console.log("Hello");});

// arrow function
doSomething(() => console.log("Hello"));

// Exercise 2 - several arguments, single command

function doSum(callback) {
    callback(10, 20, 30);
}

// inline function
doSum(function sum (a, b, c) {
    console.log(a + b + c);
});

// anonymous function
doSum(function (a, b, c) {console.log(a + b + c);});

// arrow function
doSum((a, b, c) => console.log(a + b + c));


// Exercise 3 - several arguments, single command
function printPower2(callback) {
    console.log(callback(20));
}

// inline function
printPower2(function getPower2(num) {
    return num ** 2;
});

// anonymous function
printPower2(function (num) {return num ** 2;});

// arrow function
printPower2(num => num ** 2);


// rewrite the following functions to arrow functions:
function divide(a, b) {
    const result = a/b;
    return result;
}

const divide = (a, b) => a/b;

function printIsEven(num) {
    if(num % 2 === 0) {
        console.log("Odd")
    } else {
        console.log("Even")
    }
}

const printIsEven = num => console.log(num % 2 === 0 ? "Odd" : "Even");

function isNegative(num) {
    if(num < 0) {
        console.log('Negative')
        return true;
    }
    return false
}

const isNegative = num => {
    if(num < 0) {
        console.log('Negative')
        return true;
    }
    return false
}

// const isNegative = num => num < 0 ? (console.log('Negative'), true) : false;