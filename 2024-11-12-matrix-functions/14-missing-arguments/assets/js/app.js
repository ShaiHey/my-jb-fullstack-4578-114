function getAbs(num) {
    // Protect the function from invalid arguments
    if(typeof num !== "number") return;
    return num > 0 ? num : -num;
}

console.log(getAbs); // Reference a function without (), is reference to function
console.log(getAbs(-3)); // Proper invocation
console.log(getAbs("Shai")); // Improper invocation - we can't expect logic results if we 
console.log(getAbs(true)); // Proper invocation