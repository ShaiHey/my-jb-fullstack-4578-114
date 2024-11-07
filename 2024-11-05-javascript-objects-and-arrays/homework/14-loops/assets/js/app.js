let num = prompt("Please enter a number :");
let numbers = num.split('');
let i = parseInt(num);
let sum = 0;

while (i > 0) {
    for (const number of numbers) {
        sum += parseInt(number);
    }
    console.log(sum);
    num = prompt("Please enter a number :");
    i = parseInt(num);
    numbers = num.split('');
    sum = 0;
}