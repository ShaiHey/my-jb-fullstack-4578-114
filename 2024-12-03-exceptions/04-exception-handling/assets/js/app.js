const work = () => {
    const numberOfDigits = +prompt("Please enter number of digits");

    console.log("Hello 1");

    try {
        const pi = Math.PI.toFixed(numberOfDigits);
        console.log(pi);
        return;
    } catch (err) {
        console.error(err);
        return;
        // if(err.name.includes("RangeError")) alert("Please enter a number between 0 and 100");
    } finally {
        // Finally is good for 2 things:
        // Invoked also when exception occurs in the catch block
        // And if a return statement is executed in the try block or in the catch block
        console.log("Dealt with toFixed for better and worse")
    }

    console.log("Hello 2");
}

work();