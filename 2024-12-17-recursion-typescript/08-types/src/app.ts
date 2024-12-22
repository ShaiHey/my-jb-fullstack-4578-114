// Primitives
const age: number = 22;
const message: string = "Hello";
const isActive: boolean = true;

// Arrays
const ages: number[] = [1, 2, 3];
const messages: string[] = ["Hello", "Hey", "Welcome"];
const someFlags: boolean[] = [true, false, true];

// Objects
const myObj: object = {};
myObj["age"] = 22;

const myOtherObject: {} = {};
const jason: {age: number, name: string, birthdate: Date} = {age: 22, name: "Jason", birthdate: new Date()};

type Person = {age: number, name: string, birthdate: Date};
const shay: Person = {age: 18, name: "Shay", birthdate: new Date()};
shay["grades"] = [90, 97, 100];
console.log(shay["grades"]);

// Specials
let something: any; // Practically no TS on this variable;
something = "message";
console.log(typeof something); // Wil print "string" but this is the JS type, not the TS type

let myUndefined: undefined;
let myNull: null;
let myWhatever: unknown; // a little better then any

// Arrays of objects
const students: Person[] = [shay, jason];

const animals: {type: string, eat: Function}[] = [
    {
        type: "Lizard",
        eat: function() {
            
        }
    }
];