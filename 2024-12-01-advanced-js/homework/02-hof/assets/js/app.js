const addHr = () => document.write("<hr/>");
const randomNumber = () => Math.floor(Math.random() * 101);

const numbers = [];

for(let i=1; i <= 20; i++) {
    numbers.push({
        x: randomNumber(),
        y: randomNumber()
    })
}

numbers.forEach((object, i) => document.write(`x : ${object.x} y : ${object.y}<br>`));

addHr();

const firstObjectXGreaterY = numbers.find(object => object.x > object.y);

document.write(`The first object x greater y : (${firstObjectXGreaterY.x}, ${firstObjectXGreaterY.y})`);

addHr();

const firstObjectYGreater50 = numbers.find(object => object.y > 50);

document.write(`The first object y greater than 50 : (${firstObjectYGreater50.x}, ${firstObjectYGreater50.y})`);

addHr();

numbers
    .filter(object => object.x % 2 !== 0)
    .forEach((object, i) => document.write(`x : ${object.x} y : ${object.y}<br>`));

addHr();

numbers
    .filter(object => object.y > 50)
    .forEach((object, i) => document.write(`x : ${object.x} y : ${object.y}<br>`));

addHr();

const firstNumberGreater50XIndex = numbers.findIndex(object => object.x > 50);

document.write(`The index of the first object x greater than 50 : ${firstNumberGreater50XIndex}`);

addHr();

const distancesFromOrigin = numbers.map(object => `(${object.x}, ${object.y}) : ${Math.sqrt(object.x ** 2 + object.y ** 2)}`);

document.write(distancesFromOrigin.join("<br>"));

addHr();

const minX = numbers.reduce((lastNumber, {x}) => x < lastNumber ? x : lastNumber, Infinity);

document.write(`The min x : ${minX}`);

addHr();

const objectMinX = numbers.find(object => object.x === minX);

document.write(`The object min x : (${objectMinX.x}, ${objectMinX.y})`);