// Historic way of using variables
var companyName = 'KSP';

// Starting 2015, usage of var is wrong
// Don't use var

// We can use let to declare a variable
let aVariableThatMyWantToChange;
// And then assign
aVariableThatMyWantToChange = 1;
// However we declared the "let" variable, we can always change it:
aVariableThatMyWantToChange += 3;

// Or, we can declare and assign in the same command
let anotherVariable = 3;

// Sometimes, I want to protect a variable from modifications. const from the word constant
// Assignment only happen in declaration
const aVariableThatNeverChange = 3;


document.write(`${companyName}<br>${companyName}`);
// alert(`${companyName}\n${companyName}`)
console.log(`${companyName}\n${companyName}`);

// KSP is a great company, everybody likes KSP, KSP have the best products
document.write(`<br>${companyName} is a great company, everybody likes ${companyName}, ${companyName} have the best products`);

document.write(`<br>${aVariableThatMyWantToChange}`)