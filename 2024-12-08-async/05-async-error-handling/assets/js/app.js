"use strict";

(() => {

  const pickColor = () => {
    const colors = ["red", "blue", "yellow", "green", "grey"];
    const randomIndex = Math.floor(Math.random() * colors.length * 2);
    if(!colors[randomIndex]) throw new Error("Undefined color");
    document.body.style.backgroundColor = colors[randomIndex]
  }

  document.getElementById("switchColorSync").addEventListener("click", () => {
    try {
      pickColor();
    } catch (error) {
      console.log(error.message);
    }
  });

  const pickColorAsync = (successCallback, errorCallback) => {
    setTimeout(() => {
      const colors = ["red", "blue", "yellow", "green", "grey"];
      const randomIndex = Math.floor(Math.random() * colors.length * 2);
      if(!colors[randomIndex]) return errorCallback("Undefined color");
      successCallback(colors[randomIndex]);
    }, 2000);
  }

  document.getElementById("switchColorAsync").addEventListener("click", () => {
    pickColorAsync(color => document.body.style.backgroundColor = color, error => console.log(error));
  })
})();