import Person from "./person.js";
export default class Employee extends Person {
    constructor(name, birthdate, salaries) {
        super(name, birthdate);
        this.salaries = salaries;
    }
    calcRevenue() {
        return this.salaries.reduce((acc, current) => acc + current, 0) * -1;
    }
}
