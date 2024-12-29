import Cat from "./cat.js";
import Dog from "./dog.js";
const gingo = new Cat("Orange", "Mixed", 1000, 3);
gingo.display();
console.log(gingo.getColor());
const lucky = new Dog("Gold", "Chinese pug", 5000, true);
lucky.display();
console.log(lucky.getColor());
