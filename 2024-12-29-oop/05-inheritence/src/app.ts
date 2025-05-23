import Cat from "./cat.js";
import Dog from "./dog.js";
import Fish from "./fish.js";
import SiameseCat from "./siameseCat.js";
import Animal from "./animal.js";

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

const nemo = new Fish(
    "Gold",
    "Lokus",
    10,
    false
)

nemo.display();

const jackieChan = new SiameseCat(
    "black",
    1000,
    9
)

jackieChan.display()


console.log(`Number of animals in shop is : ${Animal.totalAnimalsCreated}`)