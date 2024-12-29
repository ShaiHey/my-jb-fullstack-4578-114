class Car {
    // public constructor(make: string, model: string, diesel: boolean, year: number, price: number) {
    //     this.make = make
    //     this.model = model
    //     this.diesel = diesel
    //     this.year = year
    //     this.price = price
    // }
    // Methods
    // public init(make: string, model: string, diesel: boolean, year: number, price: number) {
    //     this.make = make
    //     this.model = model
    //     this.diesel = diesel
    //     this.year = year
    //     this.price = price
    // }
    // Shorten constructor
    constructor(make, model, diesel, year, price) {
        this.make = make;
        this.model = model;
        this.diesel = diesel;
        this.year = year;
        this.price = price;
        // Data members / Class fields
        // public make: string
        // public model: string
        // public diesel: boolean
        // public year: number
        // public price: number
        this.serialNumber = Math.floor(Math.random() * 1000000);
        this.hornVolume = Math.random();
    }
    drive() {
        console.log(`I am driving my ${this.make} ${this.model}....`);
    }
    displaySerialNumber() {
        console.log(`Serial number is : ${this.serialNumber}`);
    }
    displaySaleInfo() {
        console.log(`A ${this.year} ${this.make} ${this.model} for sale for ${this.getFullPrice()}`);
    }
    getFullPrice() {
        // Car.vat = 12 // readonly
        return this.price * Car.vat;
    }
    static horn() {
        console.log(`Tutututututu`);
    }
    hornSpecific() {
        console.log(`Tutututututu volume: ${this.hornVolume}`);
    }
}
Car.vat = 1.17;
export default Car;
