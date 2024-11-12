function printStyledFirstName() {
    return `${firstName[0].toUpperCase()}${firstName.substring(1)}`;
}

function printStyledLastName() {
    return `${lastName[0].toUpperCase()}${lastName.substring(1)}`;
}

const firstName = prompt("Please enter a first name:");
const lastName = prompt("Please enter a last name:");

// I want to print the first name and last name with a capital letter at the start
console.log(printStyledFirstName());
console.log(printStyledLastName());
console.log(`${printStyledFirstName()} ${printStyledLastName()}`);