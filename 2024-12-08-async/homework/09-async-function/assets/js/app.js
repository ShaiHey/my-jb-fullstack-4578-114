"use strict";

(() => {
  const getRandomNumberAfterDelay = (limit, callback) => {
    setTimeout(() => {
      callback(parseInt(Math.random() * limit));
    }, 5000);
  }

  document.getElementById("getRandomNumber").addEventListener("click", () => {
    getRandomNumberAfterDelay(100, console.log)
  })
})();