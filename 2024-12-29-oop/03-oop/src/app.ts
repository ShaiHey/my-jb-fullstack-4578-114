import Car from "./car.js";

const micra = new Car();
micra.make = "Nissan";
micra.model = "Micra";
micra.diesel = false;
micra.year = 2020;
micra.price = 13000;

console.log(micra)
micra.drive()

const maxima = new Car();
maxima.make = "Nissan";
maxima.model = "Maxima";
maxima.diesel = true;
maxima.year = 2015;
maxima.price = 113000;

console.log(maxima)
maxima.drive();