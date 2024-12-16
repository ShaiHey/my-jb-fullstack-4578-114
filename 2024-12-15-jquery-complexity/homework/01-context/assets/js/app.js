"use strict";

(() => {

  const randomColor = () => {
    const colors = ["red", "green", "blue", "yellow", "grey"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }

  const paragraphs = document.getElementsByTagName("p");

  for (const p of paragraphs) {
    p.addEventListener("click", function() {
      setTimeout(() => {
        this.style.backgroundColor = randomColor();
      }, 1000);
    })
  }
  
})();