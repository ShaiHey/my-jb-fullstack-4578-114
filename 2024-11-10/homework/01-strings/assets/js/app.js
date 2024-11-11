const url = prompt("Please enter a URL");

const message = url.endsWith(".com") ? "International commercial site" : url.endsWith(".org") ? "International corporate website" : url.endsWith(".co.il") ? "Israeli commercial website" : url.endsWith(".org.il") ? "Israeli corporate website" : url.endsWith("gov.il") ? "Israeli government website" : "Another site";

document.write(`Your url corresponds to an : ${message}, it ends with ${url.substring(url.indexOf("."))}`);