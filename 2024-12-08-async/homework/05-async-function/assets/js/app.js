"use strict";

(() => {
  const randomNumber = (min, max) => parseInt(Math.random() * (max - min)) + min;
  const doSomething = () => {
    setInterval(() => {
      const div = document.getElementById("randomNumber");
      const max = document.getElementById("max").value;
      div.innerHTML = randomNumber(0, max);
    }, 1000);
  }

  doSomething();
})();