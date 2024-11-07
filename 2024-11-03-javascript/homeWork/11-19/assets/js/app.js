let sum = 0;
let length = 0;

for(let i = 1; i <= 10; i++){
    const num = +prompt("Please enter a number :");
    sum += num;
    length++
}

document.write(`The sum is : ${sum}, and average is : ${sum / length}`);