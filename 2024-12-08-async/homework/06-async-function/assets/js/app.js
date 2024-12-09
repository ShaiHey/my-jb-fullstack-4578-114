"use strict";

(() => {
  const doSomething = () => {
    const colors = ["red", "blue", "yellow", "grey"];
    setInterval(() => {
      document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    }, 1000);
  }

  doSomething();
})();