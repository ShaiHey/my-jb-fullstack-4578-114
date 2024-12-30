import ArrayOperations from "./arrayOperations.js";

const numbers = new ArrayOperations([34, 57, 17, 98, 45, 8, 24, 36, 52, 53]);

console.log(`All numbers is ${numbers.arrayNumber.join(", ")}`);

console.log(`Sum : ${numbers.getSum()}`);
console.log(`Average : ${numbers.getAvg()}`);
console.log(`Max : ${numbers.getMax()}`);
console.log(`Min : ${numbers.getMin()}`);