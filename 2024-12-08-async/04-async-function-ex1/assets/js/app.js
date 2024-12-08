"use strict";

(() => {
  const getRandomColorAfterDelay = callback => {
    setTimeout(() => {
      const colors = ["red", "blue", "yellow", "green", "grey"];
      const randomIndex = Math.floor(Math.random() * colors.length);
      callback(colors[randomIndex]);
    }, 3000);
  }

  document.getElementById("colorBtn").addEventListener("click", () => {
    getRandomColorAfterDelay(color => document.body.style.backgroundColor = color);
  })
})();