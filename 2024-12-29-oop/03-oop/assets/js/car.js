export default class Car {
    // Methods
    // public init(make: string, model: string, diesel: boolean, year: number, price: number) {
    //     this.make = make
    //     this.model = model
    //     this.diesel = diesel
    //     this.year = year
    //     this.price = price
    // }
    constructor(make, model, diesel, year, price) {
        this.serialNumber = Math.floor(Math.random() * 1000000);
        this.make = make;
        this.model = model;
        this.diesel = diesel;
        this.year = year;
        this.price = price;
    }
    drive() {
        console.log(`I am driving my ${this.make} ${this.model}....`);
    }
    displaySerialNumber() {
        console.log(`Serial number is : ${this.serialNumber}`);
    }
    displaySaleInfo() {
        console.log(`A ${this.year} ${this.make} ${this.model} for sale for ${this.price}`);
    }
}
