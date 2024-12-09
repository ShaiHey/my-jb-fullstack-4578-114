"use strict";

(() => {
  const getTime = () => {
    const now = new Date();
    return `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`
  }

  const getRandomColor = () => {
    const colors = ["red", "blue", "yellow", "grey", "pink"];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  setInterval(() => {
    const span = document.getElementById("time");
    span.innerHTML = getTime();
    span.style.color = getRandomColor();
  }, 1000);
})(); 