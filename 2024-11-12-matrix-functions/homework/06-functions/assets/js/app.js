function printMaxNumber(n1, n2, n3) {
    const max = Math.max(n1, n2, n3);
    document.write(`The average is : ${max}, numbers is ${n1}, ${n2}, ${n3}<br>`);
}

function randomNumber() {
    return parseInt(Math.random() * 100);
}

printMaxNumber(1, 2, 3);

const num1 = +prompt("Please enter a number: ");
const num2 = +prompt("Please enter a number: ");
const num3 = +prompt("Please enter a number: ");

printMaxNumber(num1, num2, num3);

printMaxNumber(randomNumber(), randomNumber(), randomNumber());