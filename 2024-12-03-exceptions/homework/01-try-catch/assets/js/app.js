"use strict";

(() => {
  const getAverage = numbersArray => {
    if (numbersArray === undefined || numbersArray === null) throw new Error("Your array is undefined or null");
    if (!Array.isArray(numbersArray)) throw new Error("This is not an array");
    if (numbersArray.length === 0) throw new Error("Your array is empty");
    if (!numbersArray.every(num => typeof num === "number")) throw new Error("The array contains non-numeric elements");

    const sum = numbersArray.reduce((acc, currentNumber) => acc + currentNumber, 0);
    return sum / numbersArray.length;
  }

  const form = document.getElementById("formidable");
  
  form.addEventListener("submit", event => {
    event.preventDefault();
    
    const size = parseInt(document.getElementById("size").value);

    if (isNaN(size) || size <= 0) {
      alert("Please enter a valid number for the size.");
      return;
    }

    const numbers = [];
    for (let i = 1; i <= size; i++) {
      const numberInput = +prompt("Please enter a number");
      
      if (isNaN(numberInput)) {
        alert(`Please enter a valid number for entry ${i}`);
        return;
      }

      numbers.push(numberInput);
    }

    try {
      const average = getAverage(numbers);
      console.log(`The average is: ${average}`);
    } catch (error) {
      console.error(`Error: ${error}`);
    }
  });
})();