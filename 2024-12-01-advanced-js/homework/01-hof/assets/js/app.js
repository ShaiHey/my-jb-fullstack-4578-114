const addHr = () => document.write("<hr/>");

const numbers = [15, 1, 3, 46, 5, 6, 7, 85, 95, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

numbers.forEach((num, i) => document.write(`${num}<br>`));

const firstEvenNumber = numbers.find(num => num % 2 === 0);

addHr();

document.write(`The first even number : ${firstEvenNumber}`);

addHr();

const firstNumberPlus50 = numbers.find(num => num > 50);

document.write(`The first number greater than 50 : ${firstNumberPlus50}`);

addHr();

const allOddNumbers = numbers.filter(num => num % 2 !== 0);

document.write(allOddNumbers);

addHr();

const allNumbersPlus50 = numbers.filter(num => num > 50);

document.write(allNumbersPlus50);

addHr();

const firstNumberPlus50Index = numbers.findIndex(num => num > 50);

document.write(`The index of the first number greater than 50 : ${firstNumberPlus50Index}`);

addHr();

const EvenOrOdd = numbers.map(num => num % 2 === 0 ? `${num} : Even` : `${num} : Odd`)

document.write(EvenOrOdd.join("<br>"));

addHr();

const maxNumber = numbers.reduce((lastNumber, currentNumber) => currentNumber > lastNumber ? currentNumber : lastNumber, 0);

document.write(`Max: ${maxNumber}`);

addHr();

const minNumber = numbers.reduce((lastNumber, currentNumber) => currentNumber < lastNumber ? currentNumber : lastNumber, maxNumber);

document.write(`Min: ${minNumber}`);