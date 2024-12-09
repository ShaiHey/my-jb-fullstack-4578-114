"use strict";

(() => {
  const getRandomNumberAfterDelay = (first, last, callback) => {
    setTimeout(() => {
      const randomNumber = parseInt(Math.random() * (last - first)) + first;
      callback(randomNumber % 2 === 0 ? randomNumber : randomNumber + 1);
    }, 5000);
  }

  document.getElementById("getRandomNumber").addEventListener("click", () => {
    getRandomNumberAfterDelay(0, 100, console.log)
  })
})();