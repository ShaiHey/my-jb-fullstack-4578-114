const phoneNumber = prompt("Please enter a phone number:");

const message = phoneNumber.length === 10 && phoneNumber.startsWith("05") && !isNaN(phoneNumber) ? "Valid phone number" : "No valid";
document.write(`${phoneNumber} : ${message}`);