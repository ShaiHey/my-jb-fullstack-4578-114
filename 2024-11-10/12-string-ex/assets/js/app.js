const message = prompt("Please enter a message: ").trim();

const firstWord = message.substring(0, message.indexOf(" "));
const lastWord = message.substring(message.lastIndexOf(" ") + 1);

console.log(`${firstWord} ${lastWord}`);