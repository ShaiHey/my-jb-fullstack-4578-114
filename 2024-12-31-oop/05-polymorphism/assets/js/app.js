import Client from "./client.js";
import Employee from "./employee.js";
import Supplier from "./supplier.js";
const freddy = new Client("Freddy", new Date(), [90, 20, 30]);
freddy.printName();
const george = new Employee("George", new Date(), [63000, 33000, 10000]);
george.printName();
const jessica = new Supplier("Jessica", new Date(), [400, 500]);
jessica.printName();
const totalRevenue = freddy.calcRevenue() + george.calcRevenue() + jessica.calcRevenue();
console.log(`Total revenue: ${totalRevenue}`);
// const person = new Person("Anna", new Date()) // abstract
// person.printName();
// function sendNewYearGreetingClient(client: Client) {
//     console.log(`Happy new year ${client.name}`)
// }
// sendNewYearGreetingClient(freddy);
// function sendNewYearGreetingEmployee(employee: Employee) {
//     console.log(`Happy new year ${employee.name}`)
// }
// sendNewYearGreetingEmployee(george);
// function sendNewYearGreetingSupplier(supplier: Supplier) {
//     console.log(`Happy new year ${supplier.name}`)
// }
// sendNewYearGreetingSupplier(jessica);
function sendNewYearGreeting(person) {
    console.log(`Happy new year ${person.name}`);
}
sendNewYearGreeting(freddy);
sendNewYearGreeting(george);
sendNewYearGreeting(jessica);
