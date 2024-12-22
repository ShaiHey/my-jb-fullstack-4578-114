function calcAverage(n1, n2, n3) {
    const sum = n1 + n2 + n3;
    document.write(`The average is : ${sum/3}, numbers is ${n1}, ${n2}, ${n3}<br>`);
}

function randomNumber() {
    return parseInt(Math.random() * 100);
}

calcAverage(1, 2, 3);

const num1 = +prompt("Please enter a number: ");
const num2 = +prompt("Please enter a number: ");
const num3 = +prompt("Please enter a number: ");

calcAverage(num1, num2, num3);

calcAverage(randomNumber(), randomNumber(), randomNumber());