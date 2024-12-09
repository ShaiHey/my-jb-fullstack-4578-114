"use strict";

(() => {

  const generate7BoomAfterDelayAsync = (min, max) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const randomNumber = parseInt(Math.random() * (max - min)) + min;
        if(randomNumber % 7 === 0 || randomNumber.toString().endsWith("7")) {
          resolve(`7 Boom, number is ${randomNumber}`);
        } else {
          reject(`Not 7 boom, number is ${randomNumber}`)
        }
      }, 1000);
    });
  }

  document.getElementById("startGame").addEventListener("click", () => {
    const min = +document.getElementById("min").value;
    const max = +document.getElementById("max").value; 
    generate7BoomAfterDelayAsync(min, max)
      .then(console.log)
      .catch(console.error);
  });
})();