"use strict";

(() => {

  const getPower = (num, successCallback, errorCallback) => {
    setTimeout(() => {
      if(typeof num !== "number") return errorCallback("Number is required");
      if(num % 3 === 0) return errorCallback("Number is a divider of 3");
      successCallback(num ** 2);
    }, 3000);
  }

  document.getElementById("powerBtn").addEventListener("click", () => {
    const num  = +prompt("Please enter a number")
    getPower(num, result => console.log(`${num} ** 2 = ${result}`), console.log);
  });
})();