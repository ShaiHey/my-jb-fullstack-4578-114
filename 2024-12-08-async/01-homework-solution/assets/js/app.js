"use strict";

(() => {
  const getAverage = numbersArray => {
    if(typeof numbersArray === "undefined") throw new Error("Numbers must not be undefined");
    if(numbersArray === null) throw new Error("Numbers must not be null");
    if(!Array.isArray(numbersArray)) throw new Error("Numbers must be an array");
    if(numbersArray.length === 0) throw new Error("Your array is empty");
    if(!numbersArray.every(num => typeof num === "number")) throw new Error("The array contains non-numeric elements");

    const sum = numbersArray.reduce((acc, currentNumber) => acc + currentNumber, 0);
    return sum / numbersArray.length;
  }

  const btn = document.getElementById("invoker");
  btn.addEventListener("click", () => {
    try {
      console.log(`Average is ${getAverage([1, 3, 5, 9])}`)
    } catch (error) {
      console.error(error);
    }
  });

})();