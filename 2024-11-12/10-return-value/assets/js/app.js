function getMaxNumber(numbers) {
    return Math.max(...numbers);
}

// const max = getMaxNumber([1, 5, 90]);
// console.log(`Max is ${max}`);

console.log(`Max is ${getMaxNumber([1, 5, 90])}`);

function doSomething() {
    console.log("Inside function invocation");
    // return undefined;
}

console.log(`Result of doSomething is ${doSomething()}`);