export default class Car {
    // Data members / Class fields
    public make: string
    public model: string
    public diesel: boolean
    public year: number
    public price: number
    private serialNumber: number = Math.floor(Math.random() * 1000000)

    // Methods
    // public init(make: string, model: string, diesel: boolean, year: number, price: number) {
    //     this.make = make
    //     this.model = model
    //     this.diesel = diesel
    //     this.year = year
    //     this.price = price
    // }

    public constructor(make: string, model: string, diesel: boolean, year: number, price: number) {
        this.make = make
        this.model = model
        this.diesel = diesel
        this.year = year
        this.price = price
    }

    public drive() {
        console.log(`I am driving my ${this.make} ${this.model}....`)
    }

    public displaySerialNumber() {
        console.log(`Serial number is : ${this.serialNumber}`)
    }

    public displaySaleInfo() {
        console.log(`A ${this.year} ${this.make} ${this.model} for sale for ${this.price}`)
    }
}