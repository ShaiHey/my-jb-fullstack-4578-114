let numbers = [];
let sum = 0;
let countOdd = 0;
let countNumberLowA = 0;
let countNumberLowB = 0;

for(let i = 1; i <= 100; i++){
    let num = Math.floor(Math.random() * 101);
    numbers.push(num);
};

let toStringNumbers = numbers.toString();

document.write(toStringNumbers.split(",").join(" | "));

document.write("<br><hr/>");

for(let i = numbers.length - 1; i >= 0; i--){
    document.write(`${numbers[i]}, `);
    sum += parseInt(numbers[i]);
};

document.write("<br><hr/>");
document.write(`Sum of all numbers : ${sum}`);

document.write("<br><hr/>");
document.write(`Average of all numbers : ${sum / numbers.length}`);

document.write("<br><hr/>");

for(let i = 0; i <= numbers.length - 1; i++){
    if(parseInt(numbers[i]) % 2 === 0 && parseInt(numbers[i]) !== 0){
        document.write(`${numbers[i]}<br>`);
    } else {
        countOdd++
    }
};

document.write("<br><hr/>");
document.write(`Count odd numbers : ${countOdd}`);

document.write("<br><hr/>");
document.write(`The max number : ${Math.max(...numbers)}, the min number : ${Math.min(...numbers)}`);

document.write("<br><hr/>");

for(let i = 0; i <= numbers.length - 1; i++){
    if(parseInt(numbers[i]) > sum / numbers.length){
        document.write(`${numbers[i]}<br>`);
        countNumberLowB++
    } else {
        countNumberLowA++
    }
};

document.write("<br><hr/>");

document.write(`Count numbers smaller than the average : ${countNumberLowA}`);