import Person from "./person.js";
export default class Client extends Person {
    constructor(name, birthdate, orders) {
        super(name, birthdate);
        this.orders = orders;
    }
    calcRevenue() {
        return this.orders.reduce((acc, current) => acc + current, 0);
    }
}
