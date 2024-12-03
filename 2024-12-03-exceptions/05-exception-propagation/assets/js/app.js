const fixNum = (num, numberOfDigits) => num.toFixed(numberOfDigits);

const work = () => {
    const numberOfDigits = +prompt("Please enter number of digits");

    console.log("Hello 1");

    const pi = fixNum(Math.PI, numberOfDigits);
    console.log(pi);
}

try {
    work();
} catch (error) { // The exception occurred in fixNum, then was thrown to work, and then was thrown to the main
    console.error(error);
}