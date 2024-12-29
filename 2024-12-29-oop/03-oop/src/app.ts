import Car from "./car.js";

const micra = new Car("Nissan", "Micra", false, 2020, 13000);
// micra.init("Nissan", "Micra", false, 2020, 13000)
// micra.make = "Nissan";
// micra.model = "Micra";
// micra.diesel = false;
// micra.year = 2020;
// micra.price = 13000;
// micra.serialNumber = -10
micra.displaySerialNumber()

console.log(micra)
micra.drive()
micra.displaySaleInfo()

const maxima = new Car("Nissan", "Maxima", true, 2015, 113000);
// maxima.init("Nissan", "Maxima", true, 2015, 113000)
// maxima.make = "Nissan";
// maxima.model = "Maxima";
// maxima.diesel = true;
// maxima.year = 2015;
// maxima.price = 113000;
// maxima.serialNumber = 3
maxima.displaySerialNumber()

console.log(maxima)
maxima.drive();
maxima.displaySaleInfo()