import Cat from "./cat.js";
import Dog from "./dog.js";

const gingo = new Cat(
    "Orange",
    "Mixed",
    1000,
    3
)

gingo.display();
gingo.inhale()
console.log(gingo.getColor())

const lucky = new Dog(
    "Gold",
    "Chinese pug",
    5000,
    true
)

lucky.display();
lucky.inhale()
console.log(lucky.getBreed())