"use strict";

(() => {

  const getPower = num => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if(typeof num !== "number") reject("Number is required");
        if(num % 3 === 0) reject("Number is a divider of 3");
        resolve(num ** 2);
      }, 2000);
    });
  }

  document.getElementById("power").addEventListener("click", () => {
    const num  = +prompt("Please enter a number");
    getPower(num)
      .then(result => console.log(`${num} ** 2 = ${result}`))
      .catch(console.error);
  });
})();