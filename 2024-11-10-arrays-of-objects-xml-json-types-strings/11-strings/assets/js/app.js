// String is an array of characters
const message = "Hello world !";
console.log(message);

// I can see the character at offset 0
console.log(message[0]);

// I can see the character at offset 2
console.log(message[2]);

// With strings, i can't modify singular character
message[0] = "h";
console.log(message);

console.log(message.toUpperCase());

const upperCaseMessage = "HI, HOW ARE YOU ?";
console.log(upperCaseMessage.toLowerCase());

// JavaScript is case sensitive
// Meaning, HELLO !== hello
const text = "Hello world !"
console.log(text.includes("Hello"));
console.log(text.startsWith("Hello"));
console.log(text.endsWith("Hello"));
console.log(text.endsWith(" !"));
console.log(text.endsWith("rld !"));

const anotherMessage = "   Hello   "
console.log(anotherMessage.length);
// Trim removes blank spaces from the beginning and the end
// But, not in the middle
console.log(anotherMessage.trim().length);
console.log(message.trim());

console.log(message.indexOf("o w"));
console.log(message.indexOf("l"));
console.log(message.lastIndexOf("l"));
console.log(message.lastIndexOf("orl"));

const longMessage = "Welcome to Jamaica man, we can have a lot of fun";
console.log(longMessage.substring(11, 18));
console.log(longMessage.substring(11));

let start = longMessage.indexOf("Jamaica");
// let end = longMessage.indexOf(" man, we");
let end = longMessage.indexOf(" ", start);

console.log(longMessage.substring(start, end)); // => Jamaica