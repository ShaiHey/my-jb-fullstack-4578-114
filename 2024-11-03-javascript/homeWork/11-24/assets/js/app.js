let num = prompt("Please enter a number :");
const numbers = num.split('');
let sum = 0;

for (const number of numbers) {
    sum += parseInt(number);
};


document.write(`The sum of all numbers : ${num} is : ${sum}`);