function printRandomNumber(start, end) {
    document.write(`The random number between ${start} - ${end} is : ${parseInt(Math.random() * ((end + 1) - start)) + start}<br>`);
}

printRandomNumber(50, 100);

const min = +prompt("Please enter a min number :");
const max = +prompt("Please enter a max number :");
printRandomNumber(min, max);

document.write("<hr/>");

for(let i=1; i <= 100; i++){
    printRandomNumber(-10, 10);
}