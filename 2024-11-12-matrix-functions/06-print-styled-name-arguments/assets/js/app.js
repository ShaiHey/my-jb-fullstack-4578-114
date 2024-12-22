function printStyledName(name) {
    return `${name[0].toUpperCase()}${name.substring(1)}`;
}

const firstName = prompt("Please enter a first name:");
const middleName = prompt("Please enter a middle name:");
const lastName = prompt("Please enter a last name:");

// I want to print the first name and last name with a capital letter at the start
// console.log(printStyledName(firstName));
// console.log(printStyledName(lastName));
document.write(`${printStyledName(firstName)} ${printStyledName(middleName)} ${printStyledName(lastName)}`);