function getMaxNumber(number1, number2) {
    console.log(`The max number is ${number1 > number2 ? number1 : number2}, numbers : ${number1}, ${number2}`);
}

function getRandomNumber(min, max) {
    return parseInt(Math.random() * (max - min)) + min;
}

getMaxNumber(getRandomNumber(0, 100), getRandomNumber(0, 100));