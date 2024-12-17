// Primitives
const age = 22;
const message = "Hello";
const isActive = true;
// Arrays
const ages = [1, 2, 3];
const messages = ["Hello", "Hey", "Welcome"];
const someFlags = [true, false, true];
// Objects
const myObj = {};
myObj["age"] = 22;
const myOtherObject = {};
const jason = { age: 22, name: "Jason", birthdate: new Date() };
const shay = { age: 18, name: "Shay", birthdate: new Date() };
shay["grades"] = [90, 97, 100];
console.log(shay["grades"]);
// Specials
let something; // Practically no TS on this variable;
something = "message";
console.log(typeof something); // Wil print "string" but this is the JS type, not the TS type
let myUndefined;
let myNull;
let myWhatever; // a little better then any
// Arrays of objects
const students = [shay, jason];
const animals = [
    {
        type: "Lizard",
        eat: function () {
        }
    }
];
