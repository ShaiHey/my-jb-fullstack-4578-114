import Person from "./person.js";

export default class Supplier extends Person {
    public constructor(
        name: string,
        birthdate: Date,
        private deliveries: number[]
    ) {
        super(name, birthdate)
    }

    public calcRevenue(): number {
        return this.deliveries.reduce((acc, current) => acc + current, 0) * -1
    }
}