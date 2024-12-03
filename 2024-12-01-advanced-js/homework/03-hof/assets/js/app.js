const addHr = () => document.write("<hr/>");
const randomNumber = (min, max) => parseInt(Math.random() * (max - min)) + min;

const pizzas = [];

for(let i=1; i <= 20; i++) {
    pizzas.push({
        diameter: randomNumber(6, 30),
        slices: randomNumber(2, 8),
        toppings: randomNumber(0, 5),
        price: randomNumber(4, 100)
    })
}

pizzas.forEach((pizza, i) => document.write(`Diameter : ${pizza.diameter}, Slices : ${pizza.slices}, Toppings : ${pizza.toppings}, Price : ${pizza.price}<br>`));

addHr();

const firstPizzaWithoutTopping = pizzas.find(pizza => pizza.toppings === 0);

document.write(`Diameter : ${firstPizzaWithoutTopping.diameter}, Slices : ${firstPizzaWithoutTopping.slices}, Toppings : ${firstPizzaWithoutTopping.toppings}, Price : ${firstPizzaWithoutTopping.price}<br>`);

addHr();

const firstPizzaLess30 = pizzas.find(pizza => pizza.price < 30);

document.write(`Diameter : ${firstPizzaLess30.diameter}, Slices : ${firstPizzaLess30.slices}, Toppings : ${firstPizzaLess30.toppings}, Price : ${firstPizzaLess30.price}<br>`);

addHr();

pizzas
    .filter(pizza => pizza.diameter <= 20)
    .forEach((pizza, i) => document.write(`Diameter : ${pizza.diameter}, Slices : ${pizza.slices}, Toppings : ${pizza.toppings}, Price : ${pizza.price}<br>`));

addHr();

pizzas
    .filter(pizza => pizza.price > 80)
    .forEach((pizza, i) => document.write(`Diameter : ${pizza.diameter}, Slices : ${pizza.slices}, Toppings : ${pizza.toppings}, Price : ${pizza.price}<br>`));

addHr();

pizzas
    .filter(pizza => pizza.toppings === 0)
    .forEach((pizza, i) => document.write(`Diameter : ${pizza.diameter}, Slices : ${pizza.slices}, Toppings : ${pizza.toppings}, Price : ${pizza.price}<br>`));

addHr();

const firstPizzaWith6SlicesIndex = pizzas.findIndex(pizza => pizza.slices === 6);

document.write(`The index of first pizza with 6 slices : ${firstPizzaWith6SlicesIndex}`);

addHr();

const radiusAllPizza = pizzas.map((pizza, i) => `Pizza ${i+1}: ${pizza.diameter / 2}`);

document.write(radiusAllPizza.join("<br>"));

addHr();

pizzas
    .map(({diameter, slices, toppings, price}, i) => ({
        diameter,
        slices,
        toppings,
        price,
        vat: price * 0.17
    }))
    .forEach((pizza, i) => document.write(`Diameter : ${pizza.diameter}, Slices : ${pizza.slices}, Toppings : ${pizza.toppings}, Price : ${pizza.price}, VAT : ${pizza.vat}<br>`));

addHr();

const sumPizza = pizzas.reduce((acc, currentPizza) => acc + currentPizza.price, 0);

document.write(`The sum all pizza price : ${sumPizza}`);

addHr();

const maxPizza = pizzas.reduce((lastPrice, {price}) => price > lastPrice ? price : lastPrice, 0);

document.write(`The max pizza price : ${maxPizza}`);

addHr();

const maxPizzaObject = pizzas.find(pizza => pizza.price === maxPizza);

document.write(`The max pizza : Diameter : ${maxPizzaObject.diameter}, Slices : ${maxPizzaObject.slices}, Toppings : ${maxPizzaObject.toppings}, Price : ${maxPizzaObject.price}<br>`);