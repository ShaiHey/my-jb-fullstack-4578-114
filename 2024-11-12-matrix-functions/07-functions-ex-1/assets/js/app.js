function getMaxNumber(number1, number2) {
    console.log(`The max number is ${number1 > number2 ? number1 : number2}, numbers : ${number1}, ${number2}`);
}

function getRandomNumber() {
    const random = parseInt(Math.random() * 100);
    return random;
}

getMaxNumber(8, 20);
getMaxNumber(getRandomNumber(), getRandomNumber());

const num1 = +prompt("Please enter a number");
const num2 = +prompt("Please enter another number");
getMaxNumber(num1, num2);