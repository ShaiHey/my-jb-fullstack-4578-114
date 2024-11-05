// const num = prompt("Please enter a number");
// const longNum = num.length;
// document.write(`Your number is : ${num}, and the length is : ${longNum}`);

// console.log(longNum)

const num = +prompt("Please enter a number");

let i = 0;
let numCopy = num;

while(numCopy > 0) {
    i++;
    numCopy /= 10;
    numCopy = parseInt(numCopy);
}

document.write(`Your number is : ${num}, and the length is : ${i}`);