const dog = {
    type: "Mixed",
    name: "Noop",
    weight: 30,
    breed: "Afghan Hound"
};
const cat = {
    type: "Siamese",
    name: "Eden",
    weight: 8,
    numberOfSouls: 6
};
// function clone(dog: Dog): Dog {
//     return {...dog}
// }
function clone(obj) {
    return Object.assign({}, obj);
}
const aDuplicationOfDog = Object.assign({}, dog);
const anotherDuplicationOfDog = clone(dog);
console.log(dog);
console.log(aDuplicationOfDog);
console.log(anotherDuplicationOfDog);
console.log(cat);
const aDuplicationOfCat = clone(cat);
console.log(aDuplicationOfCat);
export {};
// const anyObject = clone({
//     name: "Jason",
//     age: 22
// })
// console.log(anyObject)
