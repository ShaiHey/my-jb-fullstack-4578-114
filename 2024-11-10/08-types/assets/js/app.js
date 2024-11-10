const num = 123;
console.log(`Typeof num is : ${typeof num}`);

const firstName = "Shai";
console.log(`Typeof firstName is : ${typeof firstName}`);

const iAmHappy = true;
console.log(`Typeof iAmHappy is : ${typeof iAmHappy}`);

const iAmSad = 4 < 2;
console.log(`Typeof iAmSad is : ${typeof iAmSad}`);

const calc = 4 + 22;
console.log(`Typeof calc is : ${typeof calc}`);

let dayOfWeek;
console.log(`Typeof dayOfWeek is : ${typeof dayOfWeek}`);

const itayInfo = {name: "Itay", type: "Person", age: 25, average: 90.20};
console.log(`Typeof itayInfo is : ${typeof itayInfo}`);
console.log(`Typeof itayInfo.type is : ${typeof itayInfo.type}`);
console.log(`Typeof itayInfo.birthDate is : ${typeof itayInfo.birthDate}`);
console.log(`Typeof itayInfo.average is : ${typeof itayInfo.average}`);

// alert("Hello");
console.log(`Typeof alert is : ${typeof alert}`);

const animals = ["Dog", "Cat", "Fish"];
console.log(`Typeof animals is : ${typeof animals}`);

console.log(`Itay age is represented as ${typeof itayInfo.age === "number" ? "number" : "string"}`);

if(typeof itayInfo.age !== "number") itayInfo.age = +itayInfo.age;