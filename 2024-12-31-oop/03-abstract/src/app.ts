import Client from "./client.js";
import Employee from "./employee.js";
import Supplier from "./supplier.js";

const client = new Client("Freddy", new Date(), [90, 20, 30])
client.printName();

const employee = new Employee("George", new Date(), [63000, 33000, 10000]);
employee.printName();

const supplier = new Supplier("Jessica", new Date(), [400, 500])
supplier.printName();

const totalRevenue = client.calcRevenue() + employee.calcRevenue() + supplier.calcRevenue();
console.log(`Total revenue: ${totalRevenue}`);

// const person = new Person("Anna", new Date()) // abstract
// person.printName();