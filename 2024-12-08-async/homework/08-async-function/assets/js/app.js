"use strict";

(() => {
  const getRandomNumberAfterDelay = (callback) => {
    setTimeout(() => {
      callback(Math.floor(Math.random() * 100));
    }, 5000);
  }

  document.getElementById("getRandomNumber").addEventListener("click", () => {
    getRandomNumberAfterDelay(console.log)
  })
})();