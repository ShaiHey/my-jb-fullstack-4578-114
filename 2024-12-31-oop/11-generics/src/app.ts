import Animal from "./animal.js";
import Cat from "./cat.js";
import Dog from "./dog.js";

const dog: Dog = {
    type: "Mixed",
    name: "Noop",
    weight: 30,
    breed: "Afghan Hound"
}

const cat: Cat = {
    type: "Siamese",
    name: "Eden",
    weight: 8,
    numberOfSouls: 6
}

// function clone(dog: Dog): Dog {
//     return {...dog}
// }

function clone<T extends Animal>(obj: T): T {
    return {...obj}
}

const aDuplicationOfDog = {...dog};
const anotherDuplicationOfDog = clone(dog);

console.log(dog);
console.log(aDuplicationOfDog);
console.log(anotherDuplicationOfDog);

console.log(cat);

const aDuplicationOfCat = clone(cat);
console.log(aDuplicationOfCat);


// const anyObject = clone({
//     name: "Jason",
//     age: 22
// })

// console.log(anyObject)