"use strict";

(() => {
  const getRandomNumberAfterDelay = (first, last, callback) => {
    setTimeout(() => {
      callback(parseInt(Math.random() * (last - first)) + first);
    }, 5000);
  }

  document.getElementById("getRandomNumber").addEventListener("click", () => {
    getRandomNumberAfterDelay(0, 100, console.log)
  })
})();