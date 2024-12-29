// We develop apps that work with tangible objects, for example: car
const carMake = "Opel"
const carModel = "Corsa"
const carYear = 2012
const carPrice = 13000

function igniteCar(carMake: string) {
    console.log(`Ignited... you can now drive your ${carMake}`)
}

// We don't want a collection of singular variables and functions
// We define cars as objects
// Problem is: we don't have any
const car = {
    make: "Opel",
    model: "Corsa",
    year: 2012,
    price: 13000,
    igniteCar: (carMake: string) => {
        console.log(`Ignited... you can now drive your ${carMake}`)
    }
}

const anotherCar = {
    make: "BMW",
    model: "535i",
    diesel: true,
    yearMade: 2012,
    price: 13000,
    igniteCar: (carMake: string) => {
        console.log(`Ignited... you can now drive your ${carMake}`)
    }
}

// Typescript can help with types
type Car = {
    make: string,
    model: string,
    year: number,
    diesel: boolean,
    price: number,
    ignite: Function
}

const nissanMicra: Car = {
    make: "Nissan",
    model: "Micra",
    year: 2015,
    diesel: false,
    price: 12000,
    ignite: function() {
        console.log("Starting....")
    }
}

const nissanMaxima: Car = {
    make: "Nissan",
    model: "Maxima",
    year: 2012,
    diesel: true,
    price: 112000,
    ignite: function() {
        console.log("Igniting....")
    }
}