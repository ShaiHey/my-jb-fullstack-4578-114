// 1. Non persistent cookie - lives as long as the browser lives
// document.cookie = "theme=dark";
// console.log(document.cookie);

// 2. Persistent cookie
const expirationDate = new Date(); // Create a new date object that represents now
expirationDate.setFullYear(expirationDate.getFullYear() + 1);
document.cookie = `theme=purple; expires=${expirationDate}`;

// 3. sessionStorage
sessionStorage.setItem("color", "blue");
console.log(sessionStorage.getItem("color"));

// 4. localStorage - persistent storage
localStorage.setItem("font-size", 36);
console.log(localStorage.getItem("font-size"));